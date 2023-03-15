import React from 'react'
import Styles from './HomeAdmin.module.css'
import Logo from '../../../public/Assets/img/logo.png'

const HomeAdmin = () => {
  return (
    <div className={Styles.container}>
       <img src={Logo} width={700} height={220} />
       <h2 style={{marginBottom:'150px'}}>Bem vindo a área administrativa do Sangue Bom!</h2>
    </div>
  )
}

export default HomeAdmin