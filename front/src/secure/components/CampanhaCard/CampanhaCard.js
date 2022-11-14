import React from 'react'
import Styles from './CampanhaCard.module.css'

const CampanhaCard = (props) => {
  return (
    <div className={Styles.card}>
        <h3 style={{fontWeight:'700', margin:'-35px 0 40px 0 '}}>{props.titulo}</h3>
        <p style={{marginTop:'-10px'}}>Tipo do sangue:<b> {props.tipoSangue}</b></p>
        <p>{props.descricao}</p>
    </div>
  )
}

export default CampanhaCard;