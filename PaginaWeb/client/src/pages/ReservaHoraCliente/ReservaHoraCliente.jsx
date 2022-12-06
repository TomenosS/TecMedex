import { Menu } from "../../componentes/Menu/Menu";
import { Footer } from "../../componentes/Footer/Footer";
import { ReservaHoraCliente } from "../../componentes/ReservaHora/ReservaHoraCliente";

const ReservaHoraClientePage = () => {
    return(
        <div>
            <Menu/>
            <ReservaHoraCliente/>
            <Footer/>
        </div>
    )
}

export default ReservaHoraClientePage