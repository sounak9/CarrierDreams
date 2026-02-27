import os

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from .config import Config
from .extensions import db, migrate

load_dotenv()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(
    app,
    origins=[
        "http://localhost:5173",
        os.getenv("FRONTEND_URL", "")  # for production
    ],
    supports_credentials=True
)

    db.init_app(app)
    migrate.init_app(app, db)

    from .routes.contact_routes import contact_bp
    app.register_blueprint(contact_bp, url_prefix="/api")

    return app
