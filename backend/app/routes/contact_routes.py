from flask import Blueprint, request, jsonify
from ..extensions import db
from ..models.contact_model import Contact
from ..services.email_service import send_email
import os


contact_bp = Blueprint("contact", __name__)

@contact_bp.route("/contact", methods=["POST"])
def create_contact():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    message = data.get("message")

    if not name or not email or not message:
        return jsonify({"error": "Missing required fields"}), 400

    new_contact = Contact(
        name=name,
        email=email,
        phone=phone,
        message=message
    )

    db.session.add(new_contact)
    db.session.commit()

    # Send email to admin
    try:
        send_email(
            subject="New Contact Form Submission",
            body=f"""
            Name: {name}
            Email: {email}
            Phone: {phone}
            Message: {message}
            """,
            to_email=os.getenv("MAIL_USERNAME")
        )
    except Exception as e:
        print("Email failed:", e)
    
    

    return jsonify({"message": "Form submitted successfully"}), 201
