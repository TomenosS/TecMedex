import { Menu } from "../../componentes/Menu/Menu";
import { Perfil } from "../../componentes/Perfil/Perfil";
import { Footer } from "../../componentes/Footer/Footer";
import { Navbar } from "../../componentes/Perfil/Navbar";
import "./Perfil.css"

const PerfilPage = () => {
    return (
        <div>
            <Menu />
            <Navbar />
            <div className="flex">
                <Perfil />
            </div>
            <Footer />
        </div>
    )
}

export default PerfilPage