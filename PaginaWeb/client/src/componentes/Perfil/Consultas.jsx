import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table, Button} from 'reactstrap';
import * as FaIcons from "react-icons/fa"
import "./Perfil.css"

export function Consultas() {
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

    return (
        <div className="contenedorTotalConsultas">
            <h3>Visualiza y descarga tus consultas</h3>
            <div className="contenedorTablaLis">
                <Table bordered>
                    <thead>
                        <tr>
                            <th>Médico</th>
                            <th>Especialidad</th>
                            <th>Region</th>
                            <th>Centro Medico</th>
                            <th>Descarga tu Consulta</th>
                        </tr>
                    </thead>

                    <tbody>
                        {consultas.map((consultas) => (
                            <tr key={consultas._id}>
                                <td >{consultas.nombreMedico}</td>
                                <td >{consultas.especialidadConsulta}</td>
                                <td >{consultas.regionConsulta}</td>
                                <td >{consultas.centroConsulta}</td>
                                <td className="ta-justify" ><Button color="danger"><FaIcons.FaFileDownload /></Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}