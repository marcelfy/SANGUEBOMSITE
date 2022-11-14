import React, { useState } from 'react';
import {
    FaBars,
    FaRegChartBar,
    FaHospitalAlt
}from "react-icons/fa";
import {AiFillInfoCircle} from 'react-icons/ai'
import {MdCampaign} from 'react-icons/md'
import { NavLink } from 'react-router-dom';
import Styles from'./SideBar.module.css'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    const menuItem=[
        {
            path:"/home/saiba-mais",
            name:"Saiba Mais",
            icon:<AiFillInfoCircle/>
        },
        // {
        //     path:"/home/historico",
        //     name:"Histórico",
        //     icon:<FaCommentAlt/>
        // },
        {
            path:"/hemocentros",
            name:"Hemocentros",
            icon:<FaHospitalAlt/>
        },
        {
            path:"/campanha",
            name:"Campanhas",
            icon:<MdCampaign/>
        }
    ]
    return (
        <div className={Styles.container}>
           <div style={{width: isOpen ? "200px" : "60px", marginTop:'-80px'}} className={Styles.sidebar}>
               <div className={Styles.topsection}>
                   <div style={{marginLeft: isOpen ? "60px" : "0px"}} className={Styles.bars}>
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className={Styles.link} activeclassName={Styles.active}>
                           <div className={Styles.icon}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className={Styles.link_text}>{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;