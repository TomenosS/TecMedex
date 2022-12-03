const mongoose = require("mongoose");
const URL = `mongodb+srv://TecMedexSPA:tomasseguel14@cluster0.zod3xjo.mongodb.net/TecMedexDB?retryWrites=true&w=majority`;

const database = async()=>{
    await mongoose
        .connect(URL)
        .then(()=>console.log("Conectado a la base de datos"))
        .catch((error) => console.error(error)); 
};


module.exports = database;