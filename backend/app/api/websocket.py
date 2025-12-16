from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.services.job_simulator import active_connections, get_job

router = APIRouter()

@router.websocket("/{job_id}")
async def websocket_job_updates(websocket: WebSocket, job_id: str):
    """WebSocket endpoint for real-time job updates"""
    await websocket.accept()
    
    # Add connection to active connections
    if job_id not in active_connections:
        active_connections[job_id] = []
    active_connections[job_id].append(websocket)
    
    try:
        # Keep connection alive
        while True:
            # Wait for messages (just to keep connection open)
            await websocket.receive_text()
    except WebSocketDisconnect:
        # Remove connection when client disconnects
        active_connections[job_id].remove(websocket)
        if not active_connections[job_id]:
            del active_connections[job_id]
