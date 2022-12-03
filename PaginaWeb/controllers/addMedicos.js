const Medicos = require("../modelo/medico");

const addMedicos = async (req, res) => {
    const { rut, nombre, correo, especialidad, region, centro} = req.body;
    const medico = new Medicos({
        rut: rut,
        nombre: nombre,
        correo: correo,
        especialidad: especialidad,
        region: region,
        centro: centro
    });
    await medico.save()
    res.json({
        status: "Medico guardado"
    });

};

module.exports = addMedicos;