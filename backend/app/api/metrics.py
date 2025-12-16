from fastapi import APIRouter
from app.models.metrics import DashboardMetrics
from app.services.job_simulator import jobs_db, records_db
import random

router = APIRouter()

@router.get("/dashboard", response_model=DashboardMetrics)
async def get_dashboard_metrics():
    """Get aggregated dashboard metrics"""
    
    # Calculate metrics from current jobs
    total_jobs = len(jobs_db)
    active_jobs = len([j for j in jobs_db.values() if j.status in ["queued", "processing"]])
    
    # Calculate total records
    total_records = sum(len(records) for records in records_db.values())
    
    # Calculate average confidence
    all_records = [record for records in records_db.values() for record in records]
    avg_confidence = (
        sum(r.overall_confidence for r in all_records) / len(all_records) * 100
        if all_records else 0
    )
    
    # Count manual reviews needed
    manual_reviews = len([r for r in all_records if r.recommendation == "manual-review"])
    
    return DashboardMetrics(
        total_providers_validated=total_records,
        total_providers_change=round(random.uniform(5, 15), 1),
        average_confidence_score=round(avg_confidence, 1),
        confidence_change=round(random.uniform(0.5, 2.0), 1),
        active_jobs=active_jobs,
        active_jobs_change=random.randint(-2, 3),
        records_requiring_review=manual_reviews,
        review_change=random.randint(-10, 20)
    )
