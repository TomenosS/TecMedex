const Cliente = require("../modelo/cliente");

const getClienteById = async (req, res) => {
  const { id } = req.cliente;

  if (id.length === 24) {
    Cliente.findById(id).then((cliente) => {
      if (!cliente) {
        return res.json({
          mensaje: "No se encontró un cliente con esta ID"+{id},
        });
      } else {
        const { _id, contraseña, __v, ...resto } = cliente._doc;
        res.json(resto);
      }
    });
  } else {
    res.json({ mensaje: "La contraseña es incorrecta" });
  }
};

module.exports = getClienteById;
