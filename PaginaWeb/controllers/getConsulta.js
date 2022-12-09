const Consulta = require("../modelo/consulta");

const getConsulta = async (req, res) => {
  const consultas = await Consulta.find();

  if (consultas) {
    res.json({ consultas });
  } else {
    res.json({ mensaje: "No hay consultas" });
  }
};

module.exports = getConsulta;