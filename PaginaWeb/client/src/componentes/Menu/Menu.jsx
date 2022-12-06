import "./Menu.css"
import { Link } from "react-router-dom"
import logo from './logo.png';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export function Menu(){
    const [name, setName] = useState();

    const token = localStorage.getItem("token");

    useEffect(() => {
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
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem("token");
    }

    if (token){
        return (
            <header>
                
                <nav id="Menu">
                    <input type='checkbox' id='responsive-menu' /><label></label>
                    <img className="logo" src={logo}></img>
                    <ul className="listaNoOrder">
                        <li className="listaLinks"><Link to="/">Inicio</Link></li>
                        <li className="listaLinks"><Link to="/ReservaHora">Reserva tu hora!</Link></li>
                        <li className="listaLinks"><Link to="/Perfil">Perfil</Link></li>
                        <li className="listaLinks"><Link to="/SobreNosotros">Sobre nosotros</Link></li>
                        <li className="listaLinks"><a id="botonCerrar" type="submit" onClick={handleLogout} ><Link to="/DatosReserva">Cerrar Sesion</Link></a></li>
                    </ul>
                    <h3>TecMedex SPA</h3>
                </nav>
            </header>
        )
    }else{
        return (
            <header>
                
                <nav id="Menu">
                    <input type='checkbox' id='responsive-menu' /><label></label>
                    <img className="logo" src={logo}></img>
                    <ul className="listaNoOrder">
                        <li className="listaLinks"><Link to="/">Inicio</Link></li>
                        <li className="listaLinks"><Link to="/DatosReserva">Agendar Hora</Link></li>
                        <li className="listaLinks"><Link to='/Registro'>Registrarse</Link></li>
                        <li className="listaLinks"><Link to="/SobreNosotros">Sobre nosotros</Link></li>
                    </ul>
                    <h3>TecMedex SPA</h3>
                </nav>
            </header>
        )
    }
   
}