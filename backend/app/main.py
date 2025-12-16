from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api import jobs, metrics, websocket

app = FastAPI(
    title=settings.app_name,
    version=settings.version,
)

# Configure response serialization to use aliases (camelCase)
app = FastAPI(
    title=settings.app_name,
    version=settings.version,
    # This ensures Pydantic models serialize using aliases
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(jobs.router, prefix=f"{settings.api_prefix}/jobs", tags=["jobs"])
app.include_router(metrics.router, prefix=f"{settings.api_prefix}/metrics", tags=["metrics"])
app.include_router(websocket.router, prefix=f"{settings.api_prefix}/ws/jobs", tags=["websocket"])

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "app": settings.app_name,
        "version": settings.version,
        "status": "running"
    }

@app.get("/health")
async def health_check():
    """Health check for monitoring"""
    return {"status": "healthy"}
