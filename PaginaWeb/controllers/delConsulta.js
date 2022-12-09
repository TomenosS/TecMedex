const Consulta = require("../modelo/consulta");
const Medico = require("../modelo/medico");

const deleteProduct = async (req, res) => {
  const { medicoId } = req.params;
  const medicoInConsulta = await Consulta.findById(medicoId);
  const { nombreMedico, especialidadConsulta, regionConsulta, centroConsulta, _id  } = await Medico.findOne({
    nombreMedico:medicoInConsulta.nombreMedico,
  });

  await Consulta.findByIdAndDelete(medicoId);
  
  await Medico.findByIdAndUpdate(
    _id,
    { enConsulta: false, nombreMedico, especialidadConsulta, regionConsulta, centroConsulta },
    { new: true }
  )
    .then((medico) => {
      res.json({
        mensaje: `El medico ${medico.nombreMedico} fue eliminado de tu consulta`,
      });
    })
    .catch((error) => res.json({ mensaje: "Hubo un error" }));
};

module.exports = deleteProduct;