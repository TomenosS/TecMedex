import { useState } from "react";
import { useEffect } from "react";
import { Table, Button} from 'reactstrap';
import * as FaIcons from "react-icons/fa"
import { useNavigate } from "react-router-dom";

import "./Perfil.css"
import axios from "axios";

export function ListadoConsultas() {

    // Token verificacion
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
    
    // Para mapear cada consulta
    const [consultas, setConsultas] = useState([])
    const API = "http://localhost:5005/api-getArrayConsultas"
    const showData = async () => {
        const response = await fetch(API)
        const data = await response.json()
        console.log(data)
        setConsultas(data)
    }
    useEffect(() => {
        showData();
    }, [])

    // Borrar consulta
    
    const borrarConsulta = async (id) =>{
        const res = await axios.delete("http://localhost:5005/api-delConsulta"+"/"+id)
        console.log(res.data)
        showData();
    }

    if (token){
        return (
            <div className="contenedorTotal">
                <h3>Consultas realizadas</h3>
                <div className="contenedorTablaLis">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Médico</th>
                                <th>Especialidad</th>
                                <th>Region</th>
                                <th>Centro Medico</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
    
                        <tbody>
                            {consultas.map((consultas) => (
                                <tr key={consultas._id}>
                                    <td >{consultas.nombreMedico}</td>
                                    <td >{consultas.especialidadConsulta}</td>
                                    <td >{consultas.regionConsulta}</td>
                                    <td >{consultas.centroConsulta}</td>
                                    <td ><Button onClick={() => borrarConsulta(consultas._id)}  color="danger"><FaIcons.FaTrash/></Button><span> </span><Button color="primary"><FaIcons.FaQuestion/></Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }else{
        return (
            <>
                <h1> No has iniciado Sesión</h1>
                <button className="boton" type="submit" onClick={() => navigate("/DatosReserva")} >Haz click para volver a iniciar sesion</button>
            </>
        )
    }
}
