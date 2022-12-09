import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Registro.css"

export const Registro = () => {


    const axios = require('axios');
    const [inputs, setInputs] = useState({
        rut: "",
        nombre: "",
        correo: "",
        contraseña: "",
        prevision: "",
        telefono: "",
    });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { rut, nombre, contraseña, correo, prevision, telefono } = inputs;

    const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (rut !== "" && nombre !== "" && contraseña !== "" && correo !== "" && telefono !== "") {
            const Usuario = {
                rut,
                nombre,
                correo,
                contraseña,
                prevision,
                telefono,
            };
            setLoading(true);
            await axios
                .post("http://localhost:5005/api-register", Usuario)
                .then((res) => {
                    const { data } = res;
                    setMensaje(data.mensaje);
                    setInputs({
                        rut: "",
                        nombre: "",
                        contraseña: "",
                        correo: "",
                        prevision: "",
                        telefono: ""
                    });
                    setTimeout(() => {
                        setMensaje("");
                        navigate("/DatosReserva");
                    }, 1500);
                })
                .catch((error) => {
                    console.error(error);
                    setMensaje("Hubo un error");
                    setTimeout(() => {
                        setMensaje("");
                    }, 1500);
                });

            setLoading(false);
        }
    };

    // Token
    const [name, setName] = useState();
    const token = localStorage.getItem("token");
    const getToken = () => {
        if (token) {
            axios
                .get("http://localhost:5005/api-clienteId", {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => (setName(data.nombre)))
                .catch((error) => console.error(error));
        }
    }
    useEffect(() => {
        getToken()
    }, [token]);


    if (token) {
        return (
            <>
                <h1> Ya has iniciado Sesion</h1>
                <button className="boton_registro" type="submit" onClick={() => navigate("/")} >Haz click aquí para regresar</button>
            </>
        )
    } else {
        return (

            <>
                <form className="formulario_register3" onSubmit={(e) => onSubmit(e)}>
                    <h2 className="formulario_tituloRegister3">Registro</h2>


                    <input
                        className="formulario_input3"
                        onChange={(e) => HandleChange(e)}
                        value={nombre}
                        name="nombre"
                        type="text"
                        placeholder="Nombre Apellido Apellido"
                        autoComplete="off"
                    />
                    <label for="" id="formulario_label3" htmlFor="nombre">Nombre completo</label>


                    <input
                        className="formulario_input3"
                        onChange={(e) => HandleChange(e)}
                        value={rut}
                        name="rut"
                        type="text"
                        placeholder="12345678-9"
                        autoComplete="off"
                    />
                    <label for="" id="formulario_label3" htmlFor="rut">Rut</label>

                    <input
                        className="formulario_input3"
                        onChange={(e) => HandleChange(e)}
                        value={telefono}
                        name="telefono"
                        type="text"
                        placeholder="+56 91234567"
                        autoComplete="off"
                    />
                    <label for="" id="formulario_label3" htmlFor="telefono">Telefono</label>

                    <select className="select_formulario_input3" htmlFor="prevision" onChange={(e) => HandleChange(e)}
                        value={prevision}
                        name="prevision"
                    >
                        <option >-Seleccione Previsión-</option>
                        <option >Fondo Nacional de Salud (Fonasa)</option>
                        <option >Isalud Isapre de Codelco</option>
                        <option >Isapre Banmédica</option>
                        <option >Isapre Colmena</option>
                        <option >Isapre Consalud</option>
                        <option >Isapre Cruz Blanca</option>
                        <option >Isapre Fundación Banco Estado</option>
                        <option >Particular</option>
                    </select>
                    <div class="select_arrow"></div>
                    <label for="" id="formulario_label3" >Prevision</label>

                    <input
                        className="formulario_input3"
                        onChange={(e) => HandleChange(e)}
                        value={correo}
                        name="correo"
                        type="email"
                        placeholder="example@ej.com"
                        autoComplete="off" />
                    <label for="" id="formulario_label3" htmlFor="correo">Correo</label>


                    <input
                        className="formulario_input3"
                        onChange={(e) => HandleChange(e)}
                        value={contraseña}
                        name="contraseña"
                        type="password"
                        placeholder="************"
                        autoComplete="off"
                    />
                    <label for="" id="formulario_label3" htmlFor="contraseña">Contraseña</label>

                    <div className="botonRegistro">
                        <button type="submit" className="boton_registro">
                            {loading ? "Cargando..." : "Registrarme"}
                        </button>
                    </div>
                    <p className="textoLogin">
                        Ya tienes una cuenta?{" "}
                        <b onClick={() => navigate("/login")}>Iniciar Sesión</b>
                    </p>
                </form>
                <div className="mensaje">
                    {mensaje && <div >{mensaje}</div>}
                </div>

            </>
        )
    }
}

// nombre, rut, fecha de nacimiento, direccion, telefono, correo, contraseña

export default Registro
