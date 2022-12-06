import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Admin.css"

export function ListadoConsultas(){
    const [ products, setProducts ] = useState([])
    const [ search, setSearch ] = useState("")

}