const Dev = require("../models/dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  //busca todos os dev num raio de 10 km
  // filtrar por tecnologias
  async index(request, reponse) {
    // console.log(request.query);
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return reponse.json({ devs });
  }
};
