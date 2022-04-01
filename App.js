
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom'
import Home from './src/public/pages/Home/Home';
import Login from './src/public/pages/Login/Login'
import Cadastro from './src/public/pages/Cadastro/Cadastro'
 
import Header from  './src/public/components/Header/Header'
import Footer from './src/public/components/Footer/Footer'
import Hemocentros from './src/public/pages/Hemocentros/Hemocentros'
import Campanha from './src/public/pages/Campanha/Campanha'

function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} > </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cadastro" element={<Cadastro />}></Route>
          <Route path="/hemocentros" element={<Hemocentros />}></Route>
          <Route path="/campanha" element={<Campanha />}></Route>
        </Routes>
       
      <Footer/>
    </Router >
  )
}

export default App;
