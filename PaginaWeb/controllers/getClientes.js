const Cliente = require("../modelo/cliente");

const getClientes = async (req,res) =>{
    const clientes = await Cliente.find();
    
    if (clientes){
        res.json({clientes});
    }else{
        res.json({mensaje: "No hay clientes"});
    }
    
};

module.exports = getClientes;