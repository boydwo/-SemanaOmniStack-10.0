const axios = require("axios");
const Dev = require("../models/dev");
const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  //lista os devs
  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },

  // armazena novos devs
  async store(request, response) {
    // solicitando os dados api POST
    const { github_username, techs, latitude, longitude } = request.body;

    // verifica se no BD tem algum usuario com esse nome
    let dev = await Dev.findOne({ github_username });
    if (!dev) {
      // Buscando na api do GitHub
      const apiResponse = await axios.get(
        // await usado pra nao prosseguir enquanto nao houver resposta da requisição
        `https://api.github.com/users/${github_username}`
      );

      // Salvando os dados retornados da api do GitHub em variaveis
      const { name = login, avatar_url, bio } = apiResponse.data;

      // transformando em array a string techs
      // const techsArray = techs.split(",").map(tech => tech.trim());
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  }
};
