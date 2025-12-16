from pydantic import BaseModel, ConfigDict

def to_camel(string: str) -> str:
    """Convert snake_case to camelCase"""
    components = string.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

class DashboardMetrics(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
    )
    
    total_providers_validated: int
    total_providers_change: float
    average_confidence_score: float
    confidence_change: float
    active_jobs: int
    active_jobs_change: int
    records_requiring_review: int
    review_change: int
