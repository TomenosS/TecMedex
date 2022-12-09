import "./ReservaHora.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export function ReservaHora() {

    const axios = require("axios")
    const [inputs, setInputs] = useState({ rut: "", prevision: "", contraseña: "" });
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { rut, prevision, contraseña } = inputs;

    const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
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


    const onSubmit = async (e) => {
        e.preventDefault();
        if (rut !== "" && prevision !== "" && contraseña !== "") {
            const Cliente = {
                rut,
                prevision,
                contraseña,
            };
            setLoading(true);
            await axios
                .post("http://localhost:5005/api-login", Cliente)
                .then((res) => {
                    const { data } = res;
                    setMensaje(data.mensaje);
                    setTimeout(() => {
                        setMensaje("");
                        localStorage.setItem("token", data?.cliente.token);
                        navigate("/");
                    }, 1500);
                })
                .catch((error) => {
                    console.error(error);
                    setMensaje("Correo u contraseña incorrecta");
                    setTimeout(() => {
                        setMensaje("");
                    }, 1500);
                });
            setInputs({ rut: "", prevision: "", contraseña: "" });
            setLoading(false);
        }
    };

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
                {mensaje && <div id="MensajeLogin">{mensaje}</div>}
                <div className="contenedorLogin">
                    <form className="formulario_login2" onSubmit={(e) => onSubmit(e)}>
                        <h2 className="formulario_tituloLogin2">Datos del cliente</h2>


                        <input
                            className="formulario_input2"
                            onChange={(e) => HandleChange(e)}
                            value={rut}
                            name="rut"
                            id="rut"
                            type="text"
                            placeholder="Rut..."
                            autoComplete="off"
                        />
                        <label id="formulario_label2" htmlFor="rut">Rut</label>

                        <select className="select_formulario_input2" htmlFor="prevision" onChange={(e) => HandleChange(e)}
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
                        <div className="select_arrow2"></div>
                        <label id="formulario_label2" >Prevision</label>

                        <input
                            className="formulario_input2"
                            onChange={(e) => HandleChange(e)}
                            value={contraseña}
                            name="contraseña"
                            id="contraseña"
                            type="password"
                            placeholder="Contraseña..."
                            autoComplete="off"
                        />
                        <label id="formulario_label2" htmlFor="contraseña">Contraseña</label>
                        <div className="botonInicio">
                            <button className="botonDatos" type="submit" >
                                {loading ? "Cargando..." : "Iniciar Sesión"}
                            </button>
                        </div>

                        <p className="textoRegistro">
                            Aun no tienes cuenta?{" "}
                            <a onClick={() => navigate("/Registro")}>Registrate!</a>
                        </p>
                    </form>
                </div>
            </>
        );
    }

}