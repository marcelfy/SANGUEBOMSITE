import style from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../public/Assets/img/logo.png'
import Sidebar from '../SideBar/SideBar'
import { useEffect, useState } from 'react'


const NavBar = () => {

    const [usuarioLogado,setUsuarioLogado] = useState();
    const navigate = useNavigate()


    useEffect(()=>{
        setUsuarioLogado(JSON.parse(sessionStorage.getItem("usuarioLogado")))
    },[])

    function atualizar(){
        setTimeout(() => {
            window.location.reload()
        }, 500);
    }

    function logout(){
        sessionStorage.removeItem("usuarioLogado")
        navigate("/")
        atualizar()
    }



    return (

        <nav className={style.navbar}>
            <ul className={style.list} style={{ marginBottom: 'none' }}>
                <li className={style.item}><Link to="/">Início</Link></li>
                <li className={style.item}><Link to="/login">{usuarioLogado? usuarioLogado.nome : "Login"}</Link></li>
                <li className={style.item}><a onClick={usuarioLogado? logout : ()=> navigate("/cadastro")}>{usuarioLogado? "Sair":"Cadastrar"}</a></li>
            </ul>
        </nav>

    )
}

export default NavBar