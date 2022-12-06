const Medico = require("../modelo/medico");

const getMedicos = async (req,res) =>{
    try{
        const arrayMedicosDB = await Medico.find();
        res.json(arrayMedicosDB)
    }catch(error){
        console.log(error)
    } 
};

module.exports = getMedicos;