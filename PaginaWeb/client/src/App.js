import InicioPage from './pages/Inicio/Inicio';
import PerfilPage from './pages/Perfil/Perfil';
import SobreNosotrosPage from './pages/SobreNosotros/SobreNosotros';
import ReservaHoraPage from './pages/ReservaHora/ReservaHora';
import RegistroPage from './pages/Registro/Registro';
import ConsultasPage from './pages/Perfil/Consultas';
import InformacionPage from './pages/Perfil/Informacion';
import ListadoConsultasPage from './pages/Perfil/ListadoConsultas';
import ContactoPage from './pages/Contacto/Contacto';
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ReservaHoraClientePage from './pages/ReservaHoraCliente/ReservaHoraCliente';

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InicioPage/>}/>
        <Route path='/DatosReserva' element={<ReservaHoraPage/>}/>
        <Route path='/Perfil' element={<PerfilPage/>}/>
        <Route path='/SobreNosotros' element={<SobreNosotrosPage/>}/>
        <Route path='/ReservaHora' element={<ReservaHoraClientePage/>}/>
        <Route path='/Registro' element={<RegistroPage/>}/>
        <Route path='/InicioPerfil' element={<PerfilPage/>}/>
        <Route path='/ResultadosConsultas' element={<ConsultasPage/>}/>
        <Route path='/InformacionUsuario' element={<InformacionPage/>}/>
        <Route path='/ListaConsultas' element={<ListadoConsultasPage/>}/>
        <Route path='/ContactoEmpresa' element={<ContactoPage/>}/>
      </Routes> 
    </div>
  );
}