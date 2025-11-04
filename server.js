const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');


const app = express();
app.use(bodyParser.json()); // Para analisar o corpo das requisições como JSON


mongoose.connect('mongodb://localhost:27017/biblioteca', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexão com o MongoDB estabelecida');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });


app.use('/api', bookRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
