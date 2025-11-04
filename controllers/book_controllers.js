from const Book = require('../models/bookModel');

exports.createBook = async (req, res) => {
    try {
        const { title, author, year } = req.body;
        const newBook = new Book({ title, author, year });
        await newBook.save();
        res.status(201).json({ message: 'Livro criado com sucesso!', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro', error: error.message });
    }
};

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar livros', error: error.message });
    }
};


exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, year } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, { title, author, year }, { new: true });
        
        if (!updatedBook) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        res.status(200).json({ message: 'Livro atualizado com sucesso', book: updatedBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar livro', error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Livro não encontrado' });
        }

        res.status(200).json({ message: 'Livro excluído com sucesso', book: deletedBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao excluir livro', error: error.message });
    }
};
