const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://boydwo:boydwo@cluster0-r9nh4.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.use(routes);

app.listen(3333);

// get, post, put, delete
//tipos de pasrâmetros:

// Query Parms:  request.query (filtros, ordenação, paginação,...)
//Route Params: request.params (identificar um recurso na alteração ou remoção)
//Body: request.body(dados para criação ou alteração de um registro)
