const Medicos = require("../modelo/medico");

const addMedicos = async (req, res) => {
    const { nombreMedico, correoMedico, especialidadConsulta, regionConsulta, centroConsulta} = req.body;
    const medico = new Medicos({
        nombreMedico: nombreMedico,
        correoMedico: correoMedico,
        especialidadConsulta: especialidadConsulta,
        regionConsulta: regionConsulta,
        centroConsulta: centroConsulta
    });
    await medico.save()
    res.json({
        status: "Medico guardado"
    });

};

module.exports = addMedicos;