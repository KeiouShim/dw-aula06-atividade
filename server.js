const express = require('express');
const app = express();
const PORT = 3000;

// Middleware essencial para que o Express consiga ler o corpo (body) das requisições em JSON
app.use(express.json());

// 1. Rota GET: Lê dados via Query Params (ex: ?nome=Luan)
app.get('/rota', (req, res) => {
    const nome = req.query.nome;
    
    if (!nome) {
        return res.status(400).json({ erro: "Por favor, envie o parâmetro 'nome' na URL." });
    }

    res.json({
        mensagem: `Olá, ${nome}! Recebi sua requisição GET via query params.`,
        dados_recebidos: req.query
    });
});

// 2. Rota POST: Lê dados via Body (corpo da requisição)
app.post('/rota', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({ erro: "Corpo da requisição deve conter um 'nome'." });
    }

    res.json({
        mensagem: `Sucesso! Recebi o nome "${nome}" no corpo do POST.`,
        corpo_recebido: req.body
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});