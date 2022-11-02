import Style from './Hemocentros.module.css'
import React, { useEffect, useState } from 'react';
import HemocentroService from '../../../service/HemocentroService.ts';
import HemocentroCard from '../../components/HemocentroCard/HemocentroCard.js';
import Logo from '../../../public/Assets/img/logo.png'

const Hemocentros = () => {

    const [hemocentros, setHemocentros] = useState([]);

    useEffect(() => {
        HemocentroService.get().then((resp) => {
            setHemocentros(resp)
        })
    }, [])

    return (
        <>
            <div style={{width:'100%', height:'auto'}}>
                <div className={Style.logo}>
                    <img src={Logo} width={700} height={230} />
                </div>
                <div className={Style.titulo}>
                    <h2 style={{ fontSize: '30px',fontWeight:'650' }}>Hemocentros</h2>
                </div>
                <div className={Style.container}>
                    {hemocentros.map((h) => {
                        return <HemocentroCard hemocentroID={h.hemocentroID} nome={h.nome} endereco={h.endereco}
                            numero={h.numero} bairro={h.bairro} cidade={h.cidade} estado={h.estado} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Hemocentros