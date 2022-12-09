import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa"

import "./Perfil.css"

export function Perfil() {

    const navigate = useNavigate();

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
        return <>
            <div id="navegador" className="sidebar ">
                <ul className="navegadorLinks">
                    <li className="linkComponente">
                        <NavLink to="/InicioPerfil" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeclassname="active"><FaIcons.FaHome/> Inicio</NavLink>
                    </li>
                    <li className="linkComponente">
                        <NavLink to="/ResultadosConsultas" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeclassname="active"><FaIcons.FaBars/> Resultados</NavLink>
                    </li>
                    <li className="linkComponente">
                        <NavLink to="/ListaConsultas" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeclassname="active"><FaIcons.FaCalendarAlt/>  Gestionar consultas</NavLink>
                    </li>
                    <li className="linkComponente">
                        <NavLink to="/InformacionUsuario" className="text-dark rounded py-2 w-100 d-inline-block px-3" exact activeclassname="active"><FaIcons.FaInfoCircle/> Información de Usuario</NavLink>
                    </li>
                </ul>
            </div>
        </>
    } else {
        return (
            <>
                <h1> No has iniciado Sesión</h1>
                <button className="boton" type="submit" onClick={() => navigate("/DatosReserva")} >Haz click para volver a iniciar sesion</button>
            </>
        )
    }

}