const Medico = require("../modelo/medico");

const getMedicos = async (req,res) =>{
    const medicos = await Medico.find();
    
    if (medicos){
        res.json({medicos});
    }else{
        res.json({mensaje: "No hay Medicos"});
    }
    
};

module.exports = getMedicos;