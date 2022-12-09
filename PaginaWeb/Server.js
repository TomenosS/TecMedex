const express = require("express");
const cors = require("cors");

const controllers = require("./controllers");
const path = require("path");
const database = require("./database/db");
const verifyToken = require("./middlewares/verifyToken");

// Soporte
const Consulta = require("./modelo/consulta");
const Medico = require("./modelo/medico")

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
app.get("/api-getConsulta", controllers.getConsulta);

app.post("/api-addCliente", controllers.addClientes);
app.post("/api-addMedico", controllers.addMedicos);
app.post("/api-addConsulta", controllers.addConsulta);
app.post("/api-login", controllers.login);
app.post("/api-register", controllers.register);
app.post("/api-registerConsulta", controllers.registerConsulta);


// Aux
app.delete("/api-delConsulta/:id", async (req, res) =>{
  const { id } = req.params
  const medicoConsulta = await Consulta.findById(id)
  const { _id, nombreMedico, correoMedico, especialidadConsulta, regionConsulta, centroConsulta } = await Medico.findOne({
    nombreMedico:medicoConsulta.nombreMedico,
  });
  await Consulta.deleteOne({_id:id})
  await Medico.findByIdAndUpdate(
    _id,
    { enConsulta: false, nombreMedico, correoMedico, especialidadConsulta, regionConsulta, centroConsulta },
    { new: true }
  )
  res.json({msg: "Consulta Eliminada"})
  
});

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

const PORT = 5005;
app.listen(PORT, () => {
    console.log(`Servidor funcionando... hhtps://LocalHost ${PORT}`);
    database();
  });

module.exports = app;