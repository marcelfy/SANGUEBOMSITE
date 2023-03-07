import style from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../../public/Assets/img/logo.png'
import Sidebar from '../SideBar/SideBar'
import React, { useEffect, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


const NavBar = () => {

    const navigate = useNavigate()
    const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"))
    const icon = usuario?.nome?.substr(0,1);

    function logout() {
        sessionStorage.clear()
        navigate("/")
    }

    const abrirTooltip = () => {

    }

    return (

        <nav className={style.navbar}>
            <ul className={style.list} style={{ marginBottom: 'none' }}>
                <li className={style.item}><Link to="/">Início</Link></li>
                <li className={style.item}><a onClick={usuario ? abrirTooltip : () => navigate("/login")}>{usuario ? usuario?.nome : "Login"}</a></li>
                <li className={style.item}><a onClick={usuario ? logout : () => navigate("/cadastro")}>{usuario ? "Sair" : "Cadastrar"}</a></li>
                {usuario ?
                    <li className={style.item}><a onClick={abrirTooltip}> <Avatar style={{ backgroundColor: '#87d068' }} size={30} icon={icon} /></a></li>
                    : null
                }
            </ul>
        </nav>

    )
}

export default NavBar