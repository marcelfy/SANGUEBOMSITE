import React, { useEffect, useState } from 'react'
import Styles from './HomeAdmin.module.css'
import Logo from '../../../public/Assets/img/logo.png'
import DoacaoService from '../../../service/DoacaoService.ts'
import UsuarioService from '../../../service/UsuarioService.ts'
import { Card, Statistic } from 'antd'
import CountUp from 'react-countup'
import ApexCharts from 'apexcharts'
import Graficos from '../../../secure/components/Graficos/Graficos.js'

const HomeAdmin = () => {

  const [doacoesMes, setDoacoesMes] = useState()
  const [doacoesAno, setDoacoesAno] = useState()
  const [usuarios, setUsuarios] = useState()
  const [doacoes, setDoacoes] = useState()
  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"))

  const ehAdmin = usuarioLogado?.Perfil?.nome == "Admin" || false
  
  useEffect(() => {
    DoacaoService.get().then((resp) => {
      
      let mesAtual = new Date().getMonth() + 1
      let anoAtual = new Date().getFullYear()
      setDoacoes(resp)
      setDoacoesMes(resp.filter((d) => new Date(d.createdAt).getMonth() + 1 == mesAtual))
      setDoacoesAno(resp.filter((d) => new Date(d.createdAt).getFullYear() == anoAtual))
    })

    UsuarioService.get().then((resp) => {
      setUsuarios(resp)
      
    })
  }, [])

  

  const formatter = (value) => <CountUp end={value} separator="." />;

  const obterMesAtual = () => {
    let dataAtual = new Date();

    let meses = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    let indiceMesAtual = dataAtual.getMonth();

    return meses[indiceMesAtual];
  }

  return (
    <div className={Styles.container}>
      <img src={Logo} width={700} height={220} />
      <h2>Bem vindo a área administrativa do Sangue Bom!</h2>
      <Graficos ehAdmin={ehAdmin}/>
      <div className={Styles.info}>
        <div className={Styles.topico}>
          <Statistic style={{ fontSize: '13px' }} title={<b>Doações realizadas</b>} value={doacoes?.length} formatter={formatter} />
        </div>
        <div className={Styles.topico}>
          <Statistic style={{ fontSize: '13px' }} title={<b>Doações realizadas no mês de {obterMesAtual()}</b>} value={doacoesMes?.length} formatter={formatter} />
        </div>
        <div className={Styles.topico}>
          <Statistic style={{ fontSize: '13px' }} title={<b>Doações realizadas no ano de {new Date().getFullYear()}</b>} value={doacoesAno?.length} formatter={formatter} />
        </div>
        <div className={Styles.topico}>
          <Statistic style={{ fontSize: '13px' }} title={<b>Total de doadores cadastrados</b>} value={usuarios?.filter((u) => u.Perfil?.nome == "Usuario")?.length} />
        </div>
      </div>
    </div>
  )
}

export default HomeAdmin