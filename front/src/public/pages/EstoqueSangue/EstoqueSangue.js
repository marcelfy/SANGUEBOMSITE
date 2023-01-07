import React, { useEffect, useState } from 'react'
import Styles from './EstoqueSangue.module.css'
import Logo from '../../Assets/img/logo.png'
import EstoqueSangueService from '../../../service/EstoqueSangueService.ts'
import EstoqueSangueComponent from '../../components/EstoqueSangueComponent/EstoqueSangueComponent'

const EstoqueSangue = () => {

  const [estoqueSangue, setEstoqueSangue] = useState([])

  useEffect(() => {
    EstoqueSangueService.get()
      .then((resp) => {
        setEstoqueSangue(resp)
      })
  }, [])

  function calcularPercentual(max, quantidade){
    return quantidade /max   * 100
    
    
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <img src={Logo} width={600} height={200} alt='' style={{ marginBottom: '30px' }} />
      </div>
      <b style={{fontSize:30}}>Estoque de <b style={{color:'red'}}>Sangue</b></b>
      <div className={Styles.graficoArea}>
        {estoqueSangue?.map((e, index) => {
          return <EstoqueSangueComponent key={index} percentual={calcularPercentual(e.quantidadeMaxima, e.quantidadeTotal )} tipoSangue={e.tipoSangue}/>
        })}
      </div>
    </div>
  )
}

export default EstoqueSangue