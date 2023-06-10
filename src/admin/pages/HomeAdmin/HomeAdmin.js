import React, { useEffect, useState } from 'react'
import Styles from './HomeAdmin.module.css'
import Logo from '../../../public/Assets/img/logo.png'
import DoacaoService from '../../../service/DoacaoService.ts'

const HomeAdmin = () => {

  const [doacoesMes, setDoacoesMes] = useState()
  const [doacoesAno, setDoacoesAno] = useState()

  useEffect(() => {
    DoacaoService.get().then((resp) => {
      let mesAtual = new Date().getMonth() + 1
      let anoAtual = new Date().getFullYear()

      setDoacoesMes(resp.filter((d) => new Date(d.createdAt).getMonth() + 1 == mesAtual))
      setDoacoesAno(resp.filter((d) => new Date(d.createdAt).getFullYear() == anoAtual))
    })
  }, [])

  const obterMesAtual = () => {
    let dataAtual = new Date();

    let meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];

    let indiceMesAtual = dataAtual.getMonth();

    return meses[indiceMesAtual];
  }

  return (
    <div className={Styles.container}>
      <img src={Logo} width={700} height={220} />
      <h2 style={{ marginBottom: '150px' }}>Bem vindo a área administrativa do Sangue Bom!</h2>
      <div className={Styles.info}>
        <div className={Styles.topico}>
          <b>Doações realizadas no mês de {obterMesAtual()}</b>
          <p>{doacoesMes?.length}</p>
        </div>
        <div className={Styles.topico}>
          <b>Doações realizadas no ano de {new Date().getFullYear()}</b>
          <p>{doacoesAno?.length}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin