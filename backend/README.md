# DataCure AI - Backend API

FastAPI backend for the DataCure AI healthcare provider validation platform.

## Features

- ✅ REST API for jobs, records, and metrics
- ✅ WebSocket support for real-time job progress
- ✅ Simulated job processing with fake data
- ✅ CORS enabled for frontend integration
- ✅ Async-first architecture

## Quick Start

### 1. Install Dependencies

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Mac/Linux
# or: venv\Scripts\activate  # On Windows

pip install -r requirements.txt
```

### 2. Run the Server

```bash
uvicorn app.main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`

### 3. Test the API

Visit `http://localhost:8000/docs` for interactive API documentation.

## API Endpoints

### Jobs
- `GET /api/v1/jobs` - List all jobs
- `POST /api/v1/jobs` - Create a new job
- `GET /api/v1/jobs/{id}` - Get job details
- `GET /api/v1/jobs/{id}/records` - Get job records (paginated)
- `GET /api/v1/jobs/{id}/records/{record_id}` - Get single record
- `POST /api/v1/jobs/{id}/export` - Export job results

### Metrics
- `GET /api/v1/metrics/dashboard` - Get dashboard metrics

### WebSocket
- `WS /api/v1/ws/jobs/{id}` - Real-time job progress updates

## How It Works

1. **Create a Job**: POST to `/api/v1/jobs` with a filename
2. **Automatic Processing**: Backend simulates validation in the background
3. **Real-time Updates**: Connect via WebSocket to receive progress events
4. **View Results**: GET records as they're processed

## Simulation Details

- Jobs process ~1-2 records per second
- Random confidence scores (70-99%)
- Automatic recommendation (auto-approve/manual-review/reject)
- WebSocket events emitted every 500-800ms

## Project Structure

```
backend/
├── app/
│   ├── main.py              # FastAPI app + CORS
│   ├── api/
│   │   ├── jobs.py          # Jobs endpoints
│   │   ├── metrics.py       # Metrics endpoints
│   │   └── websocket.py     # WebSocket endpoint
│   ├── models/
│   │   ├── job.py           # Job data models
│   │   ├── record.py        # Record data models
│   │   └── metrics.py       # Metrics data models
│   ├── services/
│   │   └── job_simulator.py # Fake job processing
│   └── core/
│       └── config.py        # App configuration
└── requirements.txt
```

## Environment Variables

Create `.env` file (optional):
```
CORS_ORIGINS=["http://localhost:3000"]
```

## Frontend Integration

The frontend is already wired to connect to this backend:
- Default URL: `http://localhost:8000`
- Configure via `NEXT_PUBLIC_API_URL` in frontend `.env.local`

## Development

- All endpoints are async
- Uses in-memory storage (data resets on restart)
- Designed for easy migration to PostgreSQL + Celery
- Console logging enabled for debugging

## Health Check

```bash
curl http://localhost:8000/health
```

Returns: `{"status": "healthy"}`
