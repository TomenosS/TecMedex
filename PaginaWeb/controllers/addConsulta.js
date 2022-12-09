const Consulta = require("../modelo/consulta");

const addConsultas = async (req, res) => {
    const { nombreMedico, especialidadConsulta, regionConsulta, centroConsulta } = req.body;
    const consulta = new Consulta({
        nombreMedico: nombreMedico,
        especialidadConsulta: especialidadConsulta,
        regionConsulta: regionConsulta,
        centroConsulta: centroConsulta
    });
    await consulta.save()
    res.json({
        status: "Consulta guardada"
    });

};

module.exports = addConsultas;