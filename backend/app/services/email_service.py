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

        # ✅ Use SMTP (NOT SSL)
        server = smtplib.SMTP(
            os.getenv("MAIL_SERVER"),
            int(os.getenv("MAIL_PORT")),
            timeout=10  # 🔥 prevents hanging
        )

        server.starttls()  # ✅ TLS instead of SSL

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

        print("✅ Email sent successfully")

    except Exception as e:
        print("❌ Email Error:", str(e))  # 🔥 DO NOT CRASH API