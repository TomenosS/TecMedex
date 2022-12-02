const { response } = require("express");
const express = require("express");
const Cliente = require("../modelo/cliente");
const router = express.Router();

router.get("/", async (req,res) =>{
    const clientes = await Cliente.find();
    console.log(clientes);
    res.json({
        clientes: clientes
    });
});

router.post("/", async (req,res) => {
    const {rut, prevision, telefono} = req.body;
    const cliente = new Cliente({
        rut: rut,
        prevision: prevision,
        telefono: telefono
    });
    await cliente.save()
    res.json({
        status:"Cliente guardado"
    });
})
router.get("/:id", async (req,res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json({
        cliente: cliente
    })
});

router.put("/:id", async (req,res) => {
    const {rut, prevision, telefono} = req.body;
    const clienteNuevo = {
        rut: rut,
        prevision: prevision,
        telefono: telefono
    }
    await Cliente.findByIdAndUpdate(req.params.id, clienteNuevo, {useFindAndModify: false});
    res.json({
        status: "Cliente actualizado"
    })
})

router.delete("/:id", async (req,res) => {
    await Cliente.findByIdAndRemove(req.params.id, {useFindAndModify: false});
    res.json({
        status: "Cliente Eliminado"
    });
})

module.exports = router;