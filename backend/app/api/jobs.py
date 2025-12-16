from fastapi import APIRouter, HTTPException, BackgroundTasks
from datetime import datetime
from app.models.job import ValidationJob, JobCreate
from app.models.record import RecordsResponse, ProviderRecord
from app.services.job_simulator import (
    jobs_db, 
    get_all_jobs, 
    get_job, 
    get_job_records,
    simulate_job_processing
)
from app.core.config import settings
import uuid

router = APIRouter()

@router.get("", response_model=list[ValidationJob])
async def list_jobs():
    """Get all validation jobs"""
    return get_all_jobs()

@router.post("", response_model=ValidationJob)
async def create_job(job_data: JobCreate, background_tasks: BackgroundTasks):
    """Create a new validation job and start processing"""
    
    job_id = str(uuid.uuid4())[:8]
    
    # Use demo settings if demo mode is enabled
    total_records = (
        settings.demo_records_per_job 
        if settings.demo_mode 
        else job_data.total_records
    )
    
    job = ValidationJob(
        id=job_id,
        name=f"Validation Job {job_id}",
        filename=job_data.filename,
        status="queued",
        progress=0,
        completed_records=0,
        total_records=total_records,
        created_at=datetime.now().isoformat(),
    )
    
    jobs_db[job_id] = job
    
    # Start background processing
    background_tasks.add_task(simulate_job_processing, job_id)
    
    return job

@router.get("/{job_id}", response_model=ValidationJob)
async def get_job_detail(job_id: str):
    """Get job details by ID"""
    job = get_job(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    return job

@router.get("/{job_id}/records", response_model=RecordsResponse)
async def get_job_records_endpoint(
    job_id: str,
    page: int = 1,
    page_size: int = 50
):
    """Get paginated records for a job"""
    job = get_job(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    
    records, total = get_job_records(job_id, page, page_size)
    
    has_more = (page * page_size) < total
    
    return RecordsResponse(
        items=records,
        total=total,
        page=page,
        page_size=page_size,
        has_more=has_more
    )

@router.get("/{job_id}/records/{record_id}", response_model=ProviderRecord)
async def get_record_detail(job_id: str, record_id: str):
    """Get single record detail"""
    records, _ = get_job_records(job_id, 1, 1000)  # Get all
    
    record = next((r for r in records if r.id == record_id), None)
    if not record:
        raise HTTPException(status_code=404, detail="Record not found")
    
    return record

@router.post("/{job_id}/export")
async def export_job(job_id: str, format: str = "csv"):
    """Export job results (simulated)"""
    job = get_job(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    
    return {
        "message": f"Export initiated for job {job_id} in {format} format",
        "job_id": job_id,
        "format": format
    }
