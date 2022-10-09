import Style from './Hemocentros.module.css'
import React, { useEffect, useState } from 'react';
import HemocentroService from '../../../service/HemocentroService.ts';

const Hemocentros = () => {

    const [hemocentros, setHemocentros] = useState();

    useEffect(()=>{
        HemocentroService.get().then((resp)=>{
            setHemocentros(resp)
        })
    },[])

    return(
        <div className={Style.container}>
        </div>
    )
}

export default Hemocentros