import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

def send_email(subject, body, to_email):
    try:
        msg = MIMEMultipart()
        msg["From"] = os.getenv("MAIL_USERNAME")
        msg["To"] = to_email
        msg["Subject"] = subject

        msg.attach(MIMEText(body, "plain"))

        # ✅ FIXED VERSION
        server = smtplib.SMTP(
            os.getenv("MAIL_SERVER"),
            int(os.getenv("MAIL_PORT")),
            timeout=10
        )

        server.starttls()

        server.login(
            os.getenv("MAIL_USERNAME"),
            os.getenv("MAIL_PASSWORD")
        )

        server.sendmail(
            os.getenv("MAIL_USERNAME"),
            to_email,
            msg.as_string()
        )

        server.quit()

        print("✅ Email sent")

    except Exception as e:
        print("❌ Email failed:", str(e))