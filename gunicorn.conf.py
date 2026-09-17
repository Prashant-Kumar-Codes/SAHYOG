# ─────────────────────────────────────────────────────────
# Gunicorn Configuration — SAHYOG Portal
# ─────────────────────────────────────────────────────────

# ── Server Socket ────────────────────────────────────────
bind = "0.0.0.0:8000"

# ── Worker Processes ─────────────────────────────────────
workers = 2
worker_class = "uvicorn.workers.UvicornWorker"

# ── Timeouts ─────────────────────────────────────────────
timeout = 120
graceful_timeout = 30
keepalive = 5

# ── Memory Management ────────────────────────────────────
max_requests = 1000
max_requests_jitter = 50

# ── Performance ──────────────────────────────────────────
preload_app = True

# ── Logging ──────────────────────────────────────────────
accesslog = "-"
errorlog = "-"
loglevel = "info"

# ── Process Naming ───────────────────────────────────────
proc_name = "sahyog-portal"
