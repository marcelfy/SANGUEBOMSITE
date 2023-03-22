import React, { useState } from 'react';
import {
    FaBars,
    FaHospitalAlt
} from "react-icons/fa";
import { AiFillInfoCircle, AiOutlineHistory, AiOutlineUser } from 'react-icons/ai'
import { MdCampaign, MdInventory2 } from 'react-icons/md'
import { FaAddressBook } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import Styles from './SideBar.module.css'


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"))

    const ehAdmin = usuarioLogado?.Perfil?.nome === "Admin" || false

    const menuItem = [
        {
            path: ehAdmin ? "/admin" : "/home/saiba-mais",
            name: ehAdmin ? "Home" : "Saiba Mais",
            icon: <AiFillInfoCircle />
        },
        {
            path: ehAdmin ? "/admin/hemocentros" : "/hemocentros",
            name: "Hemocentros",
            icon: <FaHospitalAlt />
        },
        {
            path: ehAdmin ? "/admin/campanha" : "/campanha",
            name: "Campanhas",
            icon: <MdCampaign />
        },
        {
            path: ehAdmin ? "/admin/estoque-sangue" : "/estoque-sangue",
            name: "Estoque de Sangue",
            icon: <MdInventory2 />
        },
        {
            path: "/home/historico",
            name: "Histórico",
            icon: <AiOutlineHistory />
        },
        {
            path: "/admin/agendamentos",
            name: "Agendamentos",
            icon: <FaAddressBook />
        },
        {
            path: "/admin/usuarios",
            name: "Usuarios",
            icon: <AiOutlineUser />
        }
    ]

    return (
        <div className={Styles.container}>
            <div style={{ width: isOpen ? "200px" : "60px", marginTop: '-86px' }} className={Styles.sidebar}>
                <div className={Styles.topsection}>
                    <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className={Styles.bars}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <div key={index}>
                            {ehAdmin && item.name == "Histórico" || !ehAdmin && item.name === "Agendamentos" || item.name === "Histórico" && !usuarioLogado || item.name === "Usuarios" && !ehAdmin ? null :
                                <NavLink to={item.path} className={Styles.link}>
                                    <div className={Styles.icon} key={index}>{item.icon}</div>
                                    <div style={{ display: isOpen ? "block" : "none" }} className={Styles.link_text}>{item.name}</div>
                                </NavLink>}
                        </div>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;