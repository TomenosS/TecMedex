import "./ReservaHoraCliente.css"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react"
import axios from "axios";
import { Button} from "reactstrap"
export function ReservaHoraCliente() {

    const navigate = useNavigate();

    // Filtrado
    

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


    // Guardar consulta
    const [consulta, setConsulta] = useState([]);
    const [medico, setMedico] = useState([]);

    const getMedicos = async () => {
        await axios
            .get("http://localhost:5005/api-getMedicos")
            .then(({ data }) => setMedico(data.medicos));
    };

    const getConsulta = async () => {
        return await axios
            .get("http://localhost:5005/api-getConsulta")
            .then(({ data }) => setConsulta(data.consultas))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        getMedicos();
        getConsulta();
    }, []);

    const addConsulta = async (medico) => {
        const { nombreMedico, especialidadConsulta, regionConsulta, centroConsulta } = medico;

        await axios.post("http://localhost:5005/api-registerConsulta", { nombreMedico, especialidadConsulta, regionConsulta, centroConsulta });

        getMedicos();
        getConsulta();
    };

    const [Medicos, setMedicosArray] = useState([])
    const LoadProductos = () => {
        fetch("http://localhost:5005/api-getArrayMedicos")
            .then(res => res.json())
            .then(TodosProductos => setMedicosArray(TodosProductos))
    }

    LoadProductos()


    if (token) {
        return (
            <div className="gridLayout">
                <div >
                    <form className="formulario_login1" >
                        <div className="contenedorTitulo">
                            <h3 className="formulario_tituloLogin1">Ingrese los datos para hacer su consulta</h3>
                        </div>


                        <select className="select_formulario_input1" htmlFor="centro"
                            name="centro"
                        >
                            <option >-Seleccione un Centro-</option>
                            <option >Integra Medica</option>
                            <option >Red Salud</option>
                        </select>
                        <div className="select_arrow1"></div>
                        <label id="formulario_label1" >Centro Medico</label>

                        <select className="select_formulario_input1" htmlFor="region"
                            name="region"
                        >
                            <option >-Seleccione la Región-</option>
                            <option >I Región de Tarapacá</option>
                            <option >II Región de Antofagasta</option>
                            <option >III Región de Atacama</option>
                            <option >IV Región de Coquimbo</option>
                            <option >V Región de Valparaíso</option>
                            <option >Región Metropolitana</option>
                            <option >VI Región Libertador B.O</option>
                            <option >VII Región del Maule</option>
                            <option >VIII Región del Biobío</option>
                            <option >IX Región de La Araucanía</option>
                            <option >X Región de Los Lagos</option>
                            <option >XI Región de Aysén</option>
                            <option >XII Región de Magallanes</option>
                            <option >XIV Región de Los Ríos</option>
                            <option >XV Región de Arica y Parinacota</option>
                            <option >XVI Región de Ñuble</option>
                        </select>
                        <div className="select_arrow1"></div>
                        <label id="formulario_label1" >Region</label>

                        <select className="select_formulario_input1" htmlFor="especialidad"
                            name="especialidad"
                        >
                            <option>-Seleccione el area de especialidad-</option>
                            <option>Medicina General (Mayor a 15 años)</option>
                            <option>Pediatría y consultas infantiles</option>
                            <option>Ginecología y Obstetricia</option>
                            <option>Traumatologia y Ortopedia Adulto</option>
                            <option>Kinesiología</option>
                        </select>
                        <div className="select_arrow1"></div>
                        <label id="formulario_label1" >Especialidad</label>
                        <div className="contenedorBoton">
                            <button type="submit" className="boton_registro">Mostrar todos</button>
                        </div>
                    </form>
                </div>
                <table className="tablaMedicos" >
                    <thead className="head">
                        <tr>
                            <th scope="col">Médico</th>
                            <th scope="col">Especialidad</th>
                            <th scope="col">Region</th>
                            <th scope="col">Centro Medico</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Medicos.map(eachMedico => (
                            <tr key={eachMedico._id}>
                                <td>{eachMedico.nombreMedico}</td>
                                <td>{eachMedico.especialidadConsulta}</td>
                                <td>{eachMedico.regionConsulta}</td>
                                <td>{eachMedico.centroConsulta}</td>
                                <td>
                                    {!eachMedico.enConsulta ? (
                                        <Button color="primary" onClick={() => addConsulta(eachMedico)}>Registrar consulta</Button>
                                    ) : (
                                        <Button color="success">Consulta realizada</Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <>
                <h1> No has iniciado Sesión</h1>
                <button className="boton_registro" type="submit" onClick={() => navigate("/DatosReserva")} >Haz click para volver a iniciar sesion</button>
            </>
        )
    }

}