const Livro = require('./livro-schema');

// Obter todos os livros
const obterLivros = async () => {
    return await Livro.find({});
};

// Incluir um novo livro
const incluir = async (livro) => {
    return await Livro.create(livro);
};

// Excluir um livro pelo código (_id)
const excluir = async (codigo) => {
    return await Livro.deleteOne({ _id: codigo });
};

module.exports = { obterLivros, incluir, excluir };
