import { Menu } from "../../componentes/Menu/Menu";
import { Perfil } from "../../componentes/Perfil/Perfil";
import { Consultas } from "../../componentes/Perfil/Consultas";
import { Footer } from "../../componentes/Footer/Footer";
import "./Perfil.css"

const ConsultasPage = () => {
    return (
        <div>
            <Menu />
            <div className="flex">
                <Perfil />
                <div className="content">
                    <Consultas />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ConsultasPage