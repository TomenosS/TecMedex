const Consulta = require("../modelo/consulta");

const getConsultas = async (req,res) =>{
    try{
        const arrayConsultasDB = await Consulta.find();
        res.json(arrayConsultasDB)
    }catch(error){
        console.log(error)
    } 
};

module.exports = getConsultas;