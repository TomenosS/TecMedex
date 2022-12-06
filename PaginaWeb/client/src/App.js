import InicioPage from './pages/Inicio/Inicio';
import PerfilPage from './pages/Perfil/Perfil';
import SobreNosotrosPage from './pages/SobreNosotros/SobreNosotros';
import ReservaHoraPage from './pages/ReservaHora/ReservaHora';
import RegistroPage from './pages/Registro/Registro';
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
        <Route path='/ReservaHora'element={<ReservaHoraClientePage/>}/>
        <Route path='/Registro'element={<RegistroPage/>}/>
      </Routes> 
    </div>
  );
}