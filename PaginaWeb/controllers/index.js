const getClientes = require("./getClientes")
const addClientes = require("./addClientes")
const getMedicos = require("./getMedicos")
const addMedicos = require("./addMedicos")
const getClienteById = require("./getClienteById")
const login = require("./login")
const register = require("./register")
const getArrayMedicos = require("./getArrayMedicos")
const getArrayConsultas = require("./getArrayConsultas")
const addConsulta = require("./addConsulta")
const registerConsulta = require("./registerConsulta")

module.exports={
    getClientes,
    addClientes,
    getMedicos,
    addMedicos,
    getClienteById,
    login,
    register,
    getArrayMedicos,
    getArrayConsultas,
    addConsulta,
    registerConsulta
};