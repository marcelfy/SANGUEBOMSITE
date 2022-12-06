import { Button, message, Popconfirm } from 'antd';
import React from 'react'
import Styles from './CampanhaCard.module.css'
import CampanhaService from '../../../service/CampanhaService.ts'

const CampanhaCard = (props) => {

  function aprovarCampanha(){
    CampanhaService.aprovarCampanha(props.id).then((resp) => {
      if(resp.success){
        message.success(resp.message)
      }
    })
      .finally(() => recarregar())
      .catch((error) => { })
  }

  function excluirCampanha(){
    CampanhaService.delete(props.id).then((resp) => {
      if(resp.success){
        message.success(resp.message)
      }
    })
      .finally(() => recarregar())
      .catch((error) => { })
  }

  function recarregar(){
    window.location.reload()
  }

  return (
    <div className={Styles.card}>
      <h3 style={{ fontWeight: '700', margin: '-35px 0 40px 0 ' }}>{props.titulo}</h3>
      <p style={{ marginTop: '-10px' }}>Tipo do sangue:<b> {props.tipoSangue}</b></p>
      <p>{props.descricao}</p>
      {props.ehAdmin ?
        <div className={Styles.btnArea}>
          <Popconfirm
            title="Deseja realmente excluir essa campanha?"
            onConfirm={excluirCampanha}
            okText="Sim"
            cancelText="Não"
          >
            <Button danger type='primary' style={{ width: '100px' }}>Excluir</Button>
          </Popconfirm>

          <Popconfirm
            title="Deseja realmente aprovar essa campanha?"
            onConfirm={aprovarCampanha}
            okText="Sim"
            cancelText="Não"
          >
            <Button type='primary' style={{ width: '100px' }} >Aprovar</Button>
          </Popconfirm>
        </div>
        : null}

    </div>
  )
}

export default CampanhaCard;