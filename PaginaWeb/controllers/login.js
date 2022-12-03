const Cliente = require("../modelo/cliente");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { rut, prevision, contraseña } = req.body;

  Cliente.findOne({ rut, prevision }).then((cliente) => {
    if (!cliente) {
      return res.json({ mensaje: "Cliente no encontrado" });
    }

    bcrypt.compare(contraseña, cliente.contraseña).then((esCorrecta) => {
      if (esCorrecta) {
        const { id, nombre } = cliente;

        const data = {
          id,
          nombre,
        };

        const token = jwt.sign(data, "secreto", {
          expiresIn: 86400,
        });

        res.json({
          mensaje: "Cliente logeado correctamente",
          cliente: {
            id,
            nombre,
            token,
          },
        });
      } else {
        return res.json({ mensaje: "Contraseña incorrecta" });
      }
    });
  });
};

module.exports = login;