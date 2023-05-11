import style from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import { Avatar, Popover } from 'antd';
import {MdDriveFileRenameOutline} from 'react-icons/md'
import {BsTelephoneMinus} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'
import {BiLogOutCircle} from 'react-icons/bi'


const NavBar = () => {

    const navigate = useNavigate()
    const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"))
    const icon = usuario?.nome?.substr(0, 1);

    function logout() {
        navigate("/home")
        setTimeout(() => {
            window.location.reload()
        }, 100);
        sessionStorage.clear()
    }

    const content = (
        <div className={style.tooltip}>
            <ul>
                <li><MdDriveFileRenameOutline/><b>Nome:</b> {usuario?.nome}</li>
                <li><BsTelephoneMinus/><b>Telefone:</b> {usuario?.telefone}</li>
                <li><CgProfile/><b>Perfil:</b> {usuario?.Perfil?.nome}</li>
                <li><BiLogOutCircle/><a onClick={logout}>Sair</a></li>
            </ul>
        </div>
    );

    return (

        <nav className={style.navbar}>
            <ul className={style.list} style={{ marginBottom: 'none' }}>
                <li className={style.item}><Link to="/">Início</Link></li>
                <li className={style.item}><a onClick={usuario ? null : () => navigate("/login")}>{usuario ? usuario?.nome : "Login"}</a></li>
                <li className={style.item}><a onClick={usuario ? logout : () => navigate("/cadastro")}>{usuario ? "Sair" : "Cadastrar"}</a></li>
                {usuario ?
                    <Popover placement="bottomLeft" title={<span>Dados do usuário</span>} content={content} trigger="click">
                        <li className={style.item}><a> <Avatar style={{ backgroundColor: '#87d068' }} size={30} icon={icon} /></a></li>
                    </Popover>
                    : null
                }
            </ul>
        </nav>

    )
}

export default NavBar