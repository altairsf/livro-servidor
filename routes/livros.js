const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const router = express.Router();

// Rota para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao obter livros' });
    }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
    try {
        await incluir(req.body);
        res.json({ mensagem: 'Livro incluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao incluir livro' });
    }
});

// Rota para excluir um livro
router.delete('/:codigo', async (req, res) => {
    try {
        await excluir(req.params.codigo);
        res.json({ mensagem: 'Livro excluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao excluir livro' });
    }
});

module.exports = router;