const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`);
});

app.use(bodyParser.json());

const index = require('./src/routes/index');
const animes = require('./src/routes/filmesRoutes');

app.use("/", index);
app.use("/filmes", filmes);

