
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import PaginaInicial from './public/pages/PaginaInicial/PaginaInicial';
import Login from './public/pages/Login/Login'
import Cadastro from './public/pages/Cadastro/Cadastro'
 
import Header from  './public/components/Header/Header'
import Footer from './public/components/Footer/Footer'
import Hemocentros from './secure/pages/Hemocentros/Hemocentros'
import Campanha from './secure/pages/Campanha/Campanha'
import Home from './secure/pages/Home/Home';
import Agendamento from './secure/pages/Agendamento/Agendamento';
import SaibaMais from './secure/pages/SaibaMais/SaibaMais';
import Etapas from './secure/pages/Etapas/Etapas';
import HistoricoCertificado from './secure/pages/HistoricoCertificado/Historico';


function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<PaginaInicial />} > </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/hemocentros" element={<Hemocentros />}></Route>
          <Route path="/campanha" element={<Campanha/>}></Route>
          <Route path="/agendamento" element={<Agendamento/>}></Route>
          <Route path="/home/saiba-mais" element={<SaibaMais/>}></Route>
          <Route path="/home/etapas" element={<Etapas/>}></Route>
          <Route path="/home/historico" element={<HistoricoCertificado/>}></Route>
          <Route path="/teste" element={<Sidebar/>}></Route>
        </Routes>
       
    
    </Router >
  )
}

export default App;
