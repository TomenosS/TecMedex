const Cliente = require("../modelo/cliente");

const addClientes = async (req, res) => {
    const { rut, nombre, correo, contraseña, prevision, telefono } = req.body;
    const cliente = new Cliente({
        rut: rut,
        nombre: nombre,
        correo: correo,
        contraseña: contraseña,
        prevision: prevision,
        telefono: telefono
    });
    await cliente.save()
    res.json({
        status: "Cliente guardado"
    });

};

module.exports = addClientes;