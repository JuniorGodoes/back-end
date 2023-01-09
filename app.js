const express = require("express");
const app = express();
const saidas = require('./routes/routes');
const cors = require('cors');

const corsoption = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsoption))

app.get("/", saidas);

app.get("/saidascarros", saidas);

app.get("/placascarros", saidas);

app.get("/abastecimento", saidas);

app.get("/usuariosapi", saidas);

app.listen(8080);

