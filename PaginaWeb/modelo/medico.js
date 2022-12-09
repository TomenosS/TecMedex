const mongoose = require("mongoose");
const {Schema} = mongoose;

const MedicoSchema = new Schema({
    nombreMedico: {type: String, require: true},
    correoMedico: {type: String, require: true},
    especialidadConsulta: {type: String, require: true},
    regionConsulta: {type: String, require: true},
    centroConsulta: {type: String, require: true},
    enConsulta: {type: Boolean, default: false}
});

module.exports = mongoose.model("Medico", MedicoSchema);
