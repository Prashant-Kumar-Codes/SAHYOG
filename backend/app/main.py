import os
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI(
    title="Sahyog Portal API",
    description="Startup-Friendly Public Procurement Mechanism & Sandbox Platform",
    version="1.0.0",
)

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Robust path resolution for frontend directory
def resolve_frontend_dir() -> Path:
    env_path = os.getenv("FRONTEND_DIR")
    if env_path and Path(env_path).is_dir():
        return Path(env_path).resolve()

    current_dir = Path(__file__).resolve().parent
    candidates = [
        current_dir.parent.parent / "frontend",  # ../../frontend from backend/app
        Path.cwd() / "frontend",                 # ./frontend if run from root
        Path("/app/frontend"),                   # standard Docker container path
    ]
    for candidate in candidates:
        if candidate.is_dir() and (candidate / "index.html").exists():
            return candidate.resolve()

    # Fallback to candidate 0
    return (current_dir.parent.parent / "frontend").resolve()

FRONTEND_DIR = resolve_frontend_dir()

# Mount static asset folders if they exist
for folder in ["css", "js", "docs", "images", "assets"]:
    dir_path = FRONTEND_DIR / folder
    if dir_path.is_dir():
        app.mount(f"/{folder}", StaticFiles(directory=str(dir_path)), name=folder)

# Health Check & Basic API Status
@app.get("/api/health", tags=["System"])
async def health_check():
    return {
        "status": "healthy",
        "service": "Sahyog Portal API",
        "frontend_path": str(FRONTEND_DIR),
        "frontend_available": (FRONTEND_DIR / "index.html").exists(),
    }

# HTML Page Routes
@app.get("/", include_in_schema=False)
async def serve_homepage():
    index_file = FRONTEND_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return JSONResponse(
        status_code=404,
        content={"error": "Homepage not found", "path_searched": str(index_file)},
    )

@app.get("/index.html", include_in_schema=False)
async def serve_index_html():
    return await serve_homepage()

@app.get("/login.html", include_in_schema=False)
async def serve_login():
    login_file = FRONTEND_DIR / "login.html"
    if login_file.exists():
        return FileResponse(login_file)
    return JSONResponse(status_code=404, content={"error": "login.html not found"})

@app.get("/signup.html", include_in_schema=False)
async def serve_signup():
    signup_file = FRONTEND_DIR / "signup.html"
    if signup_file.exists():
        return FileResponse(signup_file)
    return JSONResponse(status_code=404, content={"error": "signup.html not found"})
