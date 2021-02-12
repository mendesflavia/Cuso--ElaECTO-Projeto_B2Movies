const filmes = require('../modal/filmes.json');
const fs = require('fs');

const listarTodosflmes = (request, response) => {
  response.status(200).send(filmes);
};

const pesquisaPorId = (request, response) => {

  const animeEncontrado = animes.filter((filmes) => {
    return filmes.id === Number(request.params.id)
  });

  if (filmesEncontrado.length > 0) {
    response.status(200).send(filmesEncontrado);  
  } else {
    response.status(404).send("Filme não encontrado");
  }
};

const salvarAnime = (request, response) => {
  const name = request.body.name;
  const id = request.body.id;
  const start_year = request.body.start_year;
  const image = request.body.image;
  const manga = request.body.manga;

  filmes.push(
    {
      name,
      id,
      start_year,
      image,
      manga
    }
  );
  
  fs.writeFile("./src/modal/filmes.json", JSON.stringify(filmes), (error) => {console.log(error)});

  response.status(201).send(filmes);
};

module.exports = { listarTodosflmes, pesquisaPorId, salvarfilmes };
