import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Perfil.css"
import { useNavigate } from "react-router-dom";

export function Informacion() {
    const [rut, setRut] = useState();
    const [nombre, setName] = useState();
    const [correo, setCorreo] = useState();
    const [prevision, setPrevision] = useState();
    const [telefono, setTelefono] = useState();

    // Ver token
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const getToken = () => {
        if (token) {
            axios
                .get("http://localhost:5005/api-clienteId", {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => (setRut(data.rut), setName(data.nombre), setCorreo(data.correo), setPrevision(data.prevision, setTelefono(data.telefono))))
                .catch((error) => console.error(error));
        }
    }
    useEffect(() => {
        getToken()
    }, [token]);

    if (token){
        return (
            <div>
                <div>
                    <div className="page-content page-container" id="page-content">
                        <div className="padding">
                            <div className="row container d-flex justify-content-center">
                                <div className="col-xl-6 col-md-12">
                                    <div className="card user-card-full">
                                        <div className="row m-l-0 m-r-0">
                                            <div className="col-sm-4 bg-c-lite-green user-profile">
                                                <div className="card-block text-center text-white">
                                                    <div className="m-b-25">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/64/64572.png" className="img-radius" alt="User-Profile-Image" width="100px"></img>
                                                    </div>
                                                    <h6 className="f-w-600">Este es tu perfil,  {`${nombre}`}</h6>
                                                    <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <div className="card-block">
                                                    <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Información</h6>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h6 className="m-b-10 f-w-600">Rut</h6>
                                                            <p className="text-muted f-w-200">{`${rut}`}</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h6 className="m-b-10 f-w-600">Nombre</h6>
                                                            <p className="text-muted f-w-200">{`${rut}`}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h6 className="m-b-10 f-w-600">Correo electronico</h6>
                                                            <p className="text-muted f-w-200">{`${correo}`}</p>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <h6 className="m-b-10 f-w-600">Previsión</h6>
                                                            <p className="text-muted f-w-200">{`${prevision}`}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <h6 className="m-b-10 f-w-600">Teléfono</h6>
                                                            <p className="text-muted f-w-200">{`${telefono}`}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return (
            <>
                <h1> No has iniciado Sesión</h1>
                <button classNameName="boton" type="submit" onClick={() => navigate("/DatosReserva")} >Haz click para volver a iniciar sesion</button>
            </>
        )
    }
    
}
