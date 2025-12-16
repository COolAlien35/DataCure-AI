from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "DataCure AI Validation API"
    version: str = "1.0.0"
    api_prefix: str = "/api/v1"
    
    # Demo mode - generates large datasets for testing/demos
    demo_mode: bool = True  # Set to False for production
    demo_records_per_job: int = 1000  # 1k-5k for realistic demos
    
    # CORS
    cors_origins: list[str] = ["http://localhost:3000", "http://127.0.0.1:3000"]
    
    class Config:
        env_file = ".env"

settings = Settings()
