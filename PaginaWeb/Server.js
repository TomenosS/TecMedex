const express = require("express");
const cors = require("cors");

const db = require("./database/database");

const controllers = require("./controllers");
const path = require("path");
const database = require("./database/database");
const verifyToken = require("./middlewares/verifyToken");


const app = express();

// Ajustes 
app.use(express.json());
app.use(cors());

// Rutas de redireccion
app.get("/api-getClientes", controllers.getClientes);
app.get("api-clienteId", verifyToken, controllers.getClienteById)
app.get("/api-getMedicos", controllers.getMedicos);
app.post("/api-addCliente", controllers.addClientes);
app.post("/api-addMedico", controllers.addMedicos);

app.post("/login", controllers.login);
// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Servidor funcionando... hhtps://LocalHost ${PORT}`);
    database();
  });

module.exports = app;