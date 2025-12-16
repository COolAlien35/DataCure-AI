from pydantic import BaseModel, ConfigDict
from typing import Literal

def to_camel(string: str) -> str:
    """Convert snake_case to camelCase"""
    components = string.split('_')
    return components[0] + ''.join(x.title() for x in components[1:])

class ProviderRecord(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
    )
    
    id: str
    name: str
    npi: str
    address: str
    phone: str
    specialty: str
    license_status: str
    original_confidence: float | None = None  # Before validation
    overall_confidence: float  # After validation
    npi_confidence: float
    address_confidence: float
    license_confidence: float
    recommendation: Literal["auto-approve", "manual-review", "reject"]
    severity: Literal["low", "medium", "high"]
    validated_at: str
    agents_involved: list[str]

class RecordsResponse(BaseModel):
    model_config = ConfigDict(
        alias_generator=to_camel,
        populate_by_name=True,
    )
    
    items: list[ProviderRecord]
    total: int
    page: int
    page_size: int
    has_more: bool
