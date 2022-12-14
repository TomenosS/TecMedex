import { Menu } from "../../componentes/Menu/Menu";
import { Perfil } from "../../componentes/Perfil/Perfil";
import { InicioPerfil } from "../../componentes/Perfil/InicioPerfil";
import { Footer } from "../../componentes/Footer/Footer";
import "./Perfil.css"

const PerfilPage = () => {
    return (
        <div>
            <Menu />
            <div className="flex">
                <Perfil />
                <div className="content">
                    <InicioPerfil />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PerfilPage