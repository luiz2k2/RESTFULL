from flask import Flask
from routes.book_routes import book_routes

app = Flask(__name__)
app.register_blueprint(book_routes, url_prefix="/books")

if __name__ == "__main__":
    app.run(debug=True)
