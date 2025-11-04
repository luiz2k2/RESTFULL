// /routes/bookRoutes.js

const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');


router.post('/books', bookController.createBook); // Criar livro
router.get('/books', bookController.getAllBooks); // Listar livros
router.put('/books/:id', bookController.updateBook); // Atualizar livro
router.delete('/books/:id', bookController.deleteBook); // Excluir livro

module.exports = router;
