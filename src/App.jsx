
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import PaginaInicial from './public/pages/PaginaInicial/PaginaInicial';
import Login from './public/pages/Login/Login'
import Cadastro from './public/pages/Cadastro/Cadastro'
 
import Header from  './public/components/Header/Header'
import Footer from './public/components/Footer/Footer'
import Hemocentros from './secure/pages/Hemocentros/Hemocentros'
import Campanha from './secure/pages/Campanha/Campanha'
import Home from './secure/pages/Home/Home';

function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<PaginaInicial />} > </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/hemocentros" element={<Hemocentros />}></Route>
          <Route path="/campanha" element={<Campanha/>}></Route>
        </Routes>
       
      <Footer/>
    </Router >
  )
}

export default App;
