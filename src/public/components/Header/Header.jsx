import style from './Header.module.css'
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.png'


function NavBar() {
    return (
        <nav className={style.navbar}>


            <ul class={style.list}>

                <li className={style.item}><Link to="/">Início</Link></li>
                <li className={style.item}><Link to="/hemocentros">Hemocentros</Link></li>
                <li className={style.item}><Link to="/campanha">Campanhas</Link></li>
                <li className={style.item}><Link to="/login">Login</Link></li>
                <li className={style.item}><Link to="/cadastro">Cadastro</Link></li>
            </ul>

        </nav>
    )
}

export default NavBar