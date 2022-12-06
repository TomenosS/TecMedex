const bcrypt = require("bcrypt");
const Consulta = require("../modelo/consulta");

const registerConsulta = async (req, res) => {
    const { rutCliente, nombreCliente, nombreMedico, especialidadConsulta, regionConsulta, centroConsulta } = req.body;

    if (error) res.json({ error });
    else {
        const nuevaConsulta = new Consulta({
            rutCliente,
            nombreCliente,
            nombreMedico,
            especialidadConsulta,
            regionConsulta,
            centroConsulta,
        });

        nuevaConsulta
            .save()
            .then((consulta) => {
                res.json({ mensaje: "Consulta guardada correctamente", consulta });
            })
            .catch((error) => console.error(error));
    }

};

module.exports = registerConsulta;
