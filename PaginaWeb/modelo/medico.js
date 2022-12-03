const mongoose = require("mongoose");
const {Schema} = mongoose;

const MedicoSchema = new Schema({
    rut: {type: String, require: true, unique: true},
    nombre: {type: String, require: true},
    correo: {type: String, require: true},
    especialidad: {type: String, require: true},
    region: {type: String, require: true},
    centro: {type: String, require: true}
});

module.exports = mongoose.model("Medico", MedicoSchema);
