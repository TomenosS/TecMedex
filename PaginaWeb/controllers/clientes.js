const Cliente = require("../modelo/cliente");

const getCliente = async (req,res) =>{
    const clientes = await Cliente.find();
    
    if (clientes){
        res.json({clientes});
    }else{
        res.json({mensaje: "No hay usuarios"});
    }
    
};

module.exports = getCliente;