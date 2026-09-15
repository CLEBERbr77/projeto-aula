const express = require('express');
const server = express();

server.get("/hello", (req, res) => {
    const { nome, idade } = req.query;

/* template string sendo usado no message */
    return res.json({title: "Hello World!",
        message: `ola ${nome} amigo tudo bem?`,
        idade: `sua idade é ${idade}`
    });
});

server.get("/hello/:nome/:idade", (req, res) => {
    const nome = req.params.nome;
    const idade = req.params.idade;

    return res.json({title: "Hello World!",
        message: `ola ${nome} amigo tudo bem?`,
        idade: `sua idade é ${idade}`
    });
});

server.listen(3001);