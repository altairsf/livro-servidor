const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
};

const banco = mongoose.connect('mongodb://localhost:27017/livraria', options)
    .then(() => console.log('Conexão com MongoDB estabelecida!'))
    .catch((err) => console.error('Erro na conexão com MongoDB:', err));

module.exports = banco;