import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../../public/Assets/img/logo.png'


const NavBar = () => {
    return (
        <nav className={style.navbar}>
            

                <ul className={style.list} style={{marginBottom:'none'}}>

                    <li className={style.item}><Link to="/">Início</Link></li>
                    {/* <li className={style.item}><Link to="/hemocentros">Hemocentros</Link></li> */}
                    {/* <li className={style.item}><Link to="/campanha">Campanhas</Link></li> */}
                    <li className={style.item}><Link to="/login">Login</Link></li>
                    <li className={style.item}><Link to="/cadastro">Cadastro</Link></li>
                </ul>
            
        </nav>
    )
}

export default NavBar