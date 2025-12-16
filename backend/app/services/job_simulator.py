import asyncio
import random
from datetime import datetime
from typing import Dict
from app.models.job import ValidationJob
from app.models.record import ProviderRecord
from app.core.config import settings

# In-memory storage
jobs_db: Dict[str, ValidationJob] = {}
records_db: Dict[str, list[ProviderRecord]] = {}

# WebSocket connections
active_connections: Dict[str, list] = {}

# Realistic Indian provider names for demo
INDIAN_NAMES = [
    "Dr. Anil Sharma", "Dr. Priya Mehta", "Dr. Rahul Verma", "Dr. Neha Iyer",
    "Dr. Arjun Singh", "Dr. Kavita Rao", "Dr. Suresh Patel", "Dr. Pooja Nair",
    "Dr. Amit Kulkarni", "Dr. Ritu Malhotra", "Dr. Vijay Kumar", "Dr. Anjali Desai",
    "Dr. Raj Gupta", "Dr. Sneha Reddy", "Dr. Manish Jain", "Dr. Divya Pillai",
    "Dr. Karthik Menon", "Dr. Lakshmi Krishnan", "Dr. Rohan Das", "Dr. Deepika Shah"
]

SPECIALTIES = [
    "Cardiology", "Dermatology", "Orthopedics", "Pediatrics", "Neurology",
    "Gynecology", "General Medicine", "ENT", "Oncology", "Psychiatry",
    "Ophthalmology", "Gastroenterology", "Nephrology", "Pulmonology"
]

INDIAN_CITIES = [
    ("Bengaluru", "Karnataka"), ("Mumbai", "Maharashtra"), ("Delhi", "Delhi"),
    ("Chennai", "Tamil Nadu"), ("Hyderabad", "Telangana"), ("Kolkata", "West Bengal"),
    ("Pune", "Maharashtra"), ("Ahmedabad", "Gujarat"), ("Jaipur", "Rajasthan"),
    ("Lucknow", "Uttar Pradesh"), ("Kochi", "Kerala"), ("Chandigarh", "Punjab")
]

def generate_fake_records(job_id: str, total: int) -> list[ProviderRecord]:
    """Generate fake provider records for simulation with realistic distributions"""
    records = []
    
    for i in range(total):
        # Varied confidence distribution for demo:
        # 60% high confidence (auto-approve)
        # 30% medium confidence (manual-review)
        # 10% low confidence (reject)
        rand = random.random()
        if rand < 0.6:
            confidence = random.uniform(0.95, 0.99)  # High
            recommendation = "auto-approve"
            severity = "low"
        elif rand < 0.9:
            confidence = random.uniform(0.85, 0.94)  # Medium
            recommendation = "manual-review"
            severity = "medium"
        else:
            confidence = random.uniform(0.70, 0.84)  # Low
            recommendation = "reject"
            severity = "high"
        
        # Generate original (before validation) confidence - always lower to show improvement
        # Improvement range: 5-15% boost from AI validation
        original_confidence = round(confidence - random.uniform(0.05, 0.15), 2)
        original_confidence = max(0.50, original_confidence)  # Floor at 50%
        
        city, state = random.choice(INDIAN_CITIES)
        
        record = ProviderRecord(
            id=f"{job_id}-rec-{i:04d}",
            name=random.choice(INDIAN_NAMES),
            npi=f"{random.randint(1000000000, 9999999999)}",
            address=f"{random.randint(1, 999)} {random.choice(['MG Road', 'Main Street', 'Ring Road', 'Park Street'])}, {city}, {state}",
            phone=f"+91-{random.randint(70000, 99999)}{random.randint(10000, 99999)}",
            specialty=random.choice(SPECIALTIES),
            license_status="Active" if random.random() > 0.05 else "Pending",
            original_confidence=original_confidence,  # Before AI validation
            overall_confidence=round(confidence, 2),  # After AI validation
            npi_confidence=round(confidence + random.uniform(-0.05, 0.05), 2),
            address_confidence=round(confidence + random.uniform(-0.08, 0.03), 2),
            license_confidence=round(confidence + random.uniform(-0.03, 0.05), 2),
            recommendation=recommendation,
            severity=severity,
            validated_at=datetime.now().isoformat(),
            agents_involved=["NPI Validator", "Address Geocoding", "License Verification", "Specialty Match"]
        )
        records.append(record)
    
    return records

async def simulate_job_processing(job_id: str):
    """Simulate gradual job progression and emit WebSocket events"""
    job = jobs_db.get(job_id)
    if not job:
        return
    
    total_records = job.total_records
    
    # Generate all records upfront
    all_records = generate_fake_records(job_id, total_records)
    records_db[job_id] = all_records
    
    # Adjust processing speed based on dataset size for realistic demo
    # Large datasets: faster per-record processing for demo experience
    # Small datasets: slower for visibility
    if total_records > 500:
        base_sleep = 0.05  # 50ms per record = ~20 records/sec for 1000 records = ~50 sec total
    elif total_records > 100:
        base_sleep = 0.2  # 200ms per record
    else:
        base_sleep = 0.5  # 500ms per record (original speed)
    
    # Simulate processing
    for completed in range(1, total_records + 1):
        # Slight randomization for realism
        await asyncio.sleep(base_sleep + random.uniform(-0.01, 0.02))
        
        # Update job progress
        job.completed_records = completed
        job.progress = int((completed / total_records) * 100)
        job.status = "processing"
        
        # Calculate metrics
        processed = all_records[:completed]
        auto_approved = len([r for r in processed if r.recommendation == "auto-approve"])
        manual_review = len([r for r in processed if r.recommendation == "manual-review"])
        rejected = len([r for r in processed if r.recommendation == "reject"])
        
        job.auto_approved_percent = round((auto_approved / completed) * 100, 1)
        job.manual_review_percent = round((manual_review / completed) * 100, 1)
        job.rejected_percent = round((rejected / completed) * 100, 1)
        
        # Emit WebSocket event
        if job_id in active_connections:
            # Serialize using Pydantic to get camelCase
            event_data = {
                "type": "progress_update",
                "data": {
                    "progress": job.progress,
                    "completedRecords": completed,  # camelCase
                }
            }
            
            # Send to all connected clients
            for connection in active_connections[job_id]:
                try:
                    await connection.send_json(event_data)
                except:
                    pass
        
        # Emit record completed event
        if job_id in active_connections and completed % 5 == 0:  # Every 5 records
            event_data = {
                "type": "record_completed",
                "data": {
                    "recordId": all_records[completed - 1].id,  # camelCase
                    "status": "completed"
                }
            }
            for connection in active_connections[job_id]:
                try:
                    await connection.send_json(event_data)
                except:
                    pass
    
    # Mark job as completed
    job.status = "completed"
    job.progress = 100
    
    # Emit completion event
    if job_id in active_connections:
        event_data = {
            "type": "job_completed",
            "data": {"jobId": job_id}  # camelCase
        }
        for connection in active_connections[job_id]:
            try:
                await connection.send_json(event_data)
            except:
                pass

def get_all_jobs() -> list[ValidationJob]:
    """Get all jobs from in-memory storage"""
    return list(jobs_db.values())

def get_job(job_id: str) -> ValidationJob | None:
    """Get job by ID"""
    return jobs_db.get(job_id)

def get_job_records(job_id: str, page: int = 1, page_size: int = 50) -> tuple[list[ProviderRecord], int]:
    """Get paginated records for a job"""
    all_records = records_db.get(job_id, [])
    total = len(all_records)
    
    start = (page - 1) * page_size
    end = start + page_size
    
    return all_records[start:end], total
