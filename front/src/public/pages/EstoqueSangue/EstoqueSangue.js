import React from 'react'
import Styles from './EstoqueSangue.module.css'
import Logo from '../../Assets/img/logo.png'

const EstoqueSangue = () => {
  return (
    <div className={Styles.container}>
         <div className={Styles.logo}>
                <img src={Logo} width={600} height={200} alt='' style={{marginBottom: '30px'}}/>
            </div>
    </div>
  )
}

export default EstoqueSangue