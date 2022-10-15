import {Button} from 'antd'
import React from 'react'
import {ImLocation2} from 'react-icons/im'
import Styles from './HemocentroCard.module.css'

const HemocentroCard = (props) =>{
    return(
        <div className={Styles.card}>
            <p>{props.nome}</p>
            <p><ImLocation2 size={17}/> {props.endereco}</p>
            <p>Nº {props.numero}, {props.bairro}</p>
            <p>{props.cidade} / {props.estado}</p>
            <Button type='primary' href={`/agendamento/${props.hemocentroID}`}>Agendar</Button>
        </div>
    )
}

export default HemocentroCard;