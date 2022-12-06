const express = require("express");
const cors = require("cors");

const controllers = require("./controllers");
const path = require("path");
const database = require("./database/db");
const verifyToken = require("./middlewares/verifyToken");


const app = express();

// Ajustes 
app.use(express.json());
app.use(cors());

// Rutas de redireccion
app.get("/api-getClientes", controllers.getClientes);
app.get("/api-clienteId", verifyToken, controllers.getClienteById);
app.get("/api-getMedicos", controllers.getMedicos);
app.get("/api-getArrayMedicos", controllers.getArrayMedicos);
app.get("/api-getArrayConsultas", controllers.getArrayConsultas);
app.post("/api-addCliente", controllers.addClientes);
app.post("/api-addMedico", controllers.addMedicos);
app.post("./api-addConsulta", controllers.addConsulta);

app.post("/api-login", controllers.login);
app.post("/api-register", controllers.register);
app.post("/api-registerConsulta", controllers.registerConsulta);
// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Servidor funcionando... hhtps://LocalHost ${PORT}`);
    database();
  });

module.exports = app;