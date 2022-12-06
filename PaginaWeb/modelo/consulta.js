const mongoose = require("mongoose");
const {Schema} = mongoose;

const ConsultaSchema = new Schema({
    rutCliente: {type: String, require: true, unique: true},    
    nombreCliente: {type: String, require: true},
    nombreMedico: {type: String, require: true},
    especialidadConsulta: {type: String, require: true},
    regionConsulta: {type: String, require: true},
    centroConsulta: {type: String, require: true}
});

module.exports = mongoose.model("Consulta", ConsultaSchema);