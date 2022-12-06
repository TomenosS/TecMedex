import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
        return <div>
            <div>
                <div className="navegador">
                    <ul className="navegadorLinks">
                        <li className="linkComponente">
                            <Link to="/Perfil">Inicio</Link>
                        </li>
                        {/* <li className="linkComponente">
                        <Link to="/GestionDeUsuario">Gestionar Usuario</Link>
                    </li>
                    <li className="linkComponente">
                        <Link to="/GestionDePedidos">Pedidos</Link>
                    </li>
                    <li className="linkComponente">
                        <Link to="/GestionDeProductos">Lista de productos</Link>
                    </li> */}
                    </ul>
                </div>
            </div>
        </div>
    } else {
        return (
            <>
                <h1> No has iniciado Sesión</h1>
                <button className="boton" type="submit" onClick={() => navigate("/DatosReserva")} >Haz click para volver a iniciar sesion</button>
            </>
        )
    }

}