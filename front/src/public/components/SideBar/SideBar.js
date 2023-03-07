import React, { useEffect, useState } from 'react';
import {
    FaBars,
    FaRegChartBar,
    FaHospitalAlt
} from "react-icons/fa";
import { AiFillInfoCircle, AiOutlineHistory } from 'react-icons/ai'
import { MdCampaign, MdInventory2 } from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import Styles from './SideBar.module.css'


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"))

    const ehAdmin = usuarioLogado.Perfil?.nome == "Admin"

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
                        <div>
                            {ehAdmin && item.name == "Histórico"? null: 
                            <NavLink to={item.path} key={index} className={Styles.link}>
                                <div className={Styles.icon}>{item.icon}</div>
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