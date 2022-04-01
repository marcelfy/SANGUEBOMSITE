import style from './Header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../../img/logo.jpeg'
 

function NavBar() {
    return (
        <nav className={style.navbar}>
            
                {/* <Link to="/">
                    <img src={Logo} alt="Sangue Bom" className={style.img}></img>
                </Link> */}
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