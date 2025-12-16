from pydantic import BaseModel, ConfigDict
from typing import Literal
from datetime import datetime

def to_camel(string: str) -> str:
    """Convert snake_case to camelCase"""
    components = string.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

class ValidationJob(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
    )
    
    id: str
    name: str
    filename: str
    status: Literal["queued", "processing", "completed", "failed"]
    progress: int  # 0-100
    completed_records: int
    total_records: int
    created_at: str
    auto_approved_percent: float | None = None
    manual_review_percent: float | None = None
    rejected_percent: float | None = None
    eta_remaining: str | None = None

class JobCreate(BaseModel):
    filename: str
    total_records: int = 100  # Default for simulation
