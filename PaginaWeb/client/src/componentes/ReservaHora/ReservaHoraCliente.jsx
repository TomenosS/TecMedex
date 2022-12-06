import "./ReservaHoraCliente.css"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
export function ReservaHoraCliente() {

    const navigate = useNavigate();

    // Filtrado
    const [medicos, setMedicos] = useState([]);
    const [tablaMedicos, setTablaMedicos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const [inputs, setInputs] = useState({
        centro: "",
        region: "",
        especialidad: ""
    })
    const { centro, region, especialidad } = inputs;

    const HandleChange = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    };

    const search = async (e) => {
        e.preventDefault();
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const API = "http://localhost:5005/api-getArrayMedicos"
    const showData = async () => {
        const response = await fetch(API)
        const data = await response.json()
        console.log(data)
        setMedicos(data)
        setTablaMedicos(data);
    }

    const filtrar = (terminoBusqueda) => {
        let resultado = tablaMedicos.filter((elemento) => {
            if (elemento.centro.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.region.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
                elemento.especialidad.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setMedicos(resultado);
    }
    useEffect(() => {
        showData()
    }, [])

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
    const [mensaje, setMensaje] = useState();
    const [loading, setLoading] = useState(false);

    const [consulta, setConsulta] = useState({
        rutCliente: "",
        nombreCliente: "",
        nombreMedico: "",
        especialidadConsulta: "",
        regionConsulta: "",
        centroConsulta: ""

    })
    const { rutCliente, nombreCliente, nombreMedico, especialidadConsulta, regionConsulta, centroConsulta } = consulta;

    const hChange = (e) => {
        setConsulta({ ...consulta, [e.target.name]: e.target.value });
        console.log(e.target.value)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const Consulta = {
            rutCliente, nombreCliente, nombreMedico, especialidadConsulta, regionConsulta, centroConsulta,
        };
        setLoading(true);
        await axios
            .post("http://localhost:5005/api-registerConsulta", Consulta)
            .then((res) => {
                const { data } = res;
                setMensaje(data.mensaje);
                setConsulta({
                    rutCliente: "",
                    nombreCliente: "",
                    nombreMedico: "",
                    especialidadConsulta: "",
                    regionConsulta: "",
                    centroConsulta: ""
                });
                setTimeout(() => {
                    setMensaje("");
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
    };


    if (token) {
        return (
            <div className="gridLayout">
                <div >
                    <form className="formulario_login1" onChange={(e) => search(e)}>
                        <div className="contenedorTitulo">
                            <h3 className="formulario_tituloLogin1">Ingrese los datos para hacer su consulta</h3>
                        </div>
                        

                        <select className="select_formulario_input1" htmlFor="centro"
                            value={centro}
                            name="centro"
                            onChange={(e) => HandleChange(e)}
                        >
                            <option >-Seleccione un Centro-</option>
                            <option >Integra Medica</option>
                            <option >Red Salud</option>
                        </select>
                        <div className="select_arrow1"></div>
                        <label id="formulario_label1" >Centro Medico</label>

                        <select className="select_formulario_input1" htmlFor="region"
                            value={region}
                            name="region"
                            onChange={(e) => HandleChange(e)}
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
                            value={especialidad}
                            name="especialidad"
                            onChange={(e) => HandleChange(e)}
                        >
                            <option>-Seleccione el area de especialidad-</option>
                            <option>Medicina General ( Mayor a 15 años)</option>
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
                <table className="tablaMedicos" onSubmit={(e) => onSubmit(e)} onChange={HandleChange} value={busqueda}>
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
                        {medicos &&
                            medicos.map((medico) => (
                                <tr key={medico._id}>
                                    <td value={nombreMedico} name="medico" onChange={(e) => hChange(e)}>{medico.nombre}</td>
                                    <td value={especialidadConsulta} name="especialidad" onChange={(e) => hChange(e)}>{medico.especialidad}</td>
                                    <td value={regionConsulta} name="region" onChange={(e) => hChange(e)}>{medico.region}</td>
                                    <td value={centroConsulta} name="centro" onChange={(e) => hChange(e)}>{medico.centro}</td>
                                    <td>
                                        <button type="submit" >
                                            {loading ? "Cargando..." : "Registrar consulta"}
                                        </button>
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
                <button className="boton" type="submit" onClick={() => navigate("/DatosReserva")} >Haz click para volver a iniciar sesion</button>
            </>
        )
    }

}