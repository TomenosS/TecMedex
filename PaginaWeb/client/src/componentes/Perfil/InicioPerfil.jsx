import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Perfil.css"
import { Carousel1 } from "../Inicio/Carousel";

export function InicioPerfil(){

    return (
        <div>
            <Carousel1/>
        </div>
    )
}
