import { Menu } from "../../componentes/Menu/Menu";
import { Perfil } from "../../componentes/Perfil/Perfil";
import { ListadoConsultas } from "../../componentes/Perfil/ListadoConsultas";
import { Footer } from "../../componentes/Footer/Footer";
import "./Perfil.css"

const ListadoConsultasPage = () => {
    return (
        <div>
            <Menu />

            <div className="flex">
                <Perfil />
                <div className="content">
                    <ListadoConsultas />
                </div>


            </div>
            <Footer />
        </div>
    )
}

export default ListadoConsultasPage