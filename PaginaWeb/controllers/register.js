const bcrypt = require("bcrypt");
const Cliente = require("../modelo/cliente");

const register = async (req, res) => {
  const { rut, nombre, correo, contraseña,  prevision, telefono} = req.body;

  Cliente.findOne({ rut }).then((cliente) => {
    if (cliente) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!rut || !nombre || !correo || !contraseña  || !prevision ||  !telefono){
      return res.json({ mensaje: "Falta el nombre o correo o contraseña" });
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoCliente = new Cliente({
            rut,
            nombre,
            correo,
            contraseña: contraseñaHasheada,
            prevision,
            telefono,
          });

          nuevoCliente
            .save()
            .then((cliente) => {
              res.json({ mensaje: "Usuario creado correctamente", cliente });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;
