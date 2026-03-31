from app import create_app

app = create_app()
@app.route("/")
def home():
    return {
        "message": "CarrierDreams API is running 🚀",
        "status": "success"
    }

if __name__ == "__main__":
    app.run(debug=True)
