const express = require("express");
const cors = require("cors");

const db = require("./database/database");

const path = require("path");


const app = express();

// Ajustes 
app.set("port", process.env.PORT || 5005);
app.use(express.json());
app.use(cors());

// Rutas de redireccion
app.use("/api-clientes", require("./controllers/rutas"));

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), function(){
    console.log("Servidor iniciado en el puerto " + app.get("port"));
});

module.exports = app;