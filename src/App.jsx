
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import Home from './public/pages/Home/Home';
import Login from './public/pages/Login/Login'
import Cadastro from './public/pages/Cadastro/Cadastro'
 
import Header from  './public/components/Header/Header'
import Footer from './public/components/Footer/Footer'
import Hemocentros from './public/pages/Hemocentros/Hemocentros'
import Campanha from './public/pages/Campanha/Campanha'

function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} > </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/hemocentros" element={<Hemocentros />}></Route>
          <Route path="/campanha" element={<Campanha/>}></Route>
        </Routes>
       
      <Footer/>
    </Router >
  )
}

export default App;
