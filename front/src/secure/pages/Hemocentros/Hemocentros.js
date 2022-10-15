import Style from './Hemocentros.module.css'
import React, { useEffect, useState } from 'react';
import HemocentroService from '../../../service/HemocentroService.ts';
import HemocentroCard from '../../components/HemocentroCard/HemocentroCard.js';

const Hemocentros = () => {

    const [hemocentros, setHemocentros] = useState([]);

    useEffect(()=>{
        HemocentroService.get().then((resp)=>{
            setHemocentros(resp)
        })
    },[])

    return(
        <div className={Style.container}>
            {hemocentros.map((h)=>{
                return <HemocentroCard hemocentroID={h.hemocentroID} nome={h.nome} endereco={h.endereco} 
                numero={h.numero} bairro={h.bairro} cidade={h.cidade} estado={h.estado}/> 
            })}
        </div>
    )
}

export default Hemocentros