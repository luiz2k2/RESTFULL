from flask import Blueprint
from controllers.book_controller import (
    create_book,
    list_books,
    update_book,
    delete_book
)

book_routes = Blueprint("book_routes", __name__)

book_routes.route("/", methods=["POST"])(create_book)
book_routes.route("/", methods=["GET"])(list_books)
book_routes.route("/<int:id>", methods=["PUT"])(update_book)
book_routes.route("/<int:id>", methods=["DELETE"])(delete_book)
