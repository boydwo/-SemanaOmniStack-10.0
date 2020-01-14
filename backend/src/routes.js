const { Router } = require("express");
const axios = require("axios");
const Dev = require("./models/dev");

const routes = Router();

routes.post("/devs", async (request, response) => {
  // solicitando os dados api POST
  const { github_username, techs, latitude, longitude } = request.body;

  // Buscando na api do GitHub
  const apiResponse = await axios.get(
    // await usado pra nao prosseguir enquanto nao houver resposta da requisição
    `https://api.github.com/users/${github_username}`
  );

  // Salvando os dados retornados da api do GitHub em variaveis
  const { name = login, avatar_url, bio } = apiResponse.data;

  // transformando em array a string techs
  const techsArray = techs.split(",").map(tech => tech.trim());

  const location = {
    type: "Point",
    coordinates: [longitude, latitude]
  };

  const dev = await Dev.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray,
    location
  });

  return response.json(dev);
});

module.exports = routes;
