import Styles from './SideBar.module.css'
import {MdCampaign} from 'react-icons/md'
import {AiOutlineCalendar, AiOutlineHistory} from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';

const SideBar = () =>{

    const sideBarItens =[
        {
            name: 'Campanhas',
            to: '/home/campanhas',
            icon: <MdCampaign/>,
        },
        {
            name: 'Agendamento',
            to: '/home/agendamento',
            icon: <AiOutlineCalendar/>,
        },
        {
            name: 'Histórico',
            to: '/home/historico',
            icon: <AiOutlineHistory/>,
        },
    ]

    return(
            
    )
}

export default SideBar