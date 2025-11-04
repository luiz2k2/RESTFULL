from flask import jsonify, request
from models.book_model import books

# POST - Create book
def create_book():
    data = request.get_json()

    if not all(key in data for key in ("title", "author", "year", "genre")):
        return jsonify({"message": "All fields are required: title, author, year, genre."}), 400

    new_book = {
        "id": len(books) + 1,
        "title": data["title"],
        "author": data["author"],
        "year": data["year"],
        "genre": data["genre"]
    }

    books.append(new_book)
    return jsonify({"message": "Book created successfully!", "book": new_book}), 201


# GET - List all books (with optional author filter)
def list_books():
    author = request.args.get("author")

    if author:
        filtered = [b for b in books if author.lower() in b["author"].lower()]
        return jsonify(filtered)

    return jsonify(books)


# PUT - Update book
def update_book(id):
    data = request.get_json()
    book = next((b for b in books if b["id"] == id), None)

    if not book:
        return jsonify({"message": "Book not found."}), 404

    book["title"] = data.get("title", book["title"])
    book["author"] = data.get("author", book["author"])
    book["year"] = data.get("year", book["year"])
    book["genre"] = data.get("genre", book["genre"])

    return jsonify({"message": "Book updated successfully!", "book": book})


# DELETE - Delete book
def delete_book(id):
    global books
    book = next((b for b in books if b["id"] == id), None)

    if not book:
        return jsonify({"message": "Book not found."}), 404

    books = [b for b in books if b["id"] != id]
    return jsonify({"message": "Book deleted successfully!"})
