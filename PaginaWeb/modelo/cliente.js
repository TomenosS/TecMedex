const mongoose = require("mongoose");
const {Schema} = mongoose;

const ClienteSchema = new Schema({
    rut: {type: String, require: true, unique: true},
    nombre: {type: String, require: true},
    correo: {type: String, require: true},
    contraseña: {type: String, require: true},
    prevision: {type: String, require: true},
    telefono: {type: String, require: false}
});

module.exports = mongoose.model("Cliente", ClienteSchema);
