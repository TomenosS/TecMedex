import { Menu } from "../../componentes/Menu/Menu";
import { Perfil } from "../../componentes/Perfil/Perfil";
import { Informacion } from "../../componentes/Perfil/Informacion";
import { Footer } from "../../componentes/Footer/Footer";
import "./Perfil.css"

const InformacionPage = () => {
    return (
        <div>
            <Menu />

            <div className="flex">
                <Perfil />
                <div className="content">
                    <Informacion />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default InformacionPage