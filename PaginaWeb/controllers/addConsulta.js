const Consulta = require("../modelo/consulta");

const addConsultas = async (req, res) => {
    const { rutCliente, nombreCliente, nombreMedico, especialidadConsulta, regionConsulta, centroConsulta } = req.body;
    const consulta = new Consulta({
        rutCliente: rutCliente,
        nombreCliente: nombreCliente,
        nombreMedico: nombreMedico,
        especialidadConsulta: especialidadConsulta,
        regionConsulta: regionConsulta,
        centroConsulta: centroConsulta
    });
    await consulta.save()
    res.json({
        status: "Consulta guardado"
    });

};

module.exports = addConsultas;