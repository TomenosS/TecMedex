const Consulta = require("../modelo/consulta");
const Medico = require("../modelo/medico");

const registerConsulta = async (req, res) => {
    const { nombreMedico, especialidadConsulta, regionConsulta, centroConsulta } = req.body;
    const estaEnMedicos = await Medico.findOne({ nombreMedico });
    const noEstaVacio = nombreMedico != "" && especialidadConsulta !== "" && regionConsulta !== "" && centroConsulta !== "";
    const estaEnLaConsulta = await Consulta.findOne({ nombreMedico });


    if (!estaEnMedicos) {
        res.status(400).json({
            mensaje: "Este medico no está registrado",
        });
    } else if (noEstaVacio && !estaEnLaConsulta) {
        const newConsulta = new Consulta({ nombreMedico, especialidadConsulta, regionConsulta, centroConsulta });

        await Medico.findByIdAndUpdate(
            estaEnMedicos?._id,
            { enConsulta: true, nombreMedico, especialidadConsulta, regionConsulta, centroConsulta },
            { new: true }
        )
            .then((consulta) => {
                newConsulta.save();
                res.json({
                    mensaje: `La consulta fue agregada`,
                    consulta,
                });
            })
            .catch((error) => console.error(error));

    } else if (estaEnLaConsulta) {
        res.status(400).json({
            mensaje: "La consulta ya ha sido realizada",
        });
    }

};

module.exports = registerConsulta;
