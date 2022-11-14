import React, { useState, useEffect } from 'react'
import Styles from './AgendamentoPorHemocentro.module.css'
import { Table, Button, Select, Option, Form } from 'antd'
import AgendamentoService from '../../../service/AgendamentoService.ts'
import HemocentroService from '../../../service/HemocentroService.ts'
import Logo from '../../../public/Assets/img/logo.png'
import UsuarioService from '../../../service/UsuarioService.ts'


const AgendamentoPorHemocentro = () => {

  const [agendamentos, setAgendamentos] = useState()
  const [hemocentros, setHemocentros] = useState()
  const { Option } = Select;

  useEffect(() => {
    AgendamentoService.get().then((resp) => {
      setAgendamentos(resp)
    })

    HemocentroService.get().then((resp) => {
      setHemocentros(resp)
    })
  }, [])

  const pesquisarPorHemocentro = (id) => {
    AgendamentoService.getByHemocentroId(id).then((resp) => {
      setAgendamentos(resp)
    })
  }

  const colunas = [
    {
      title: 'Nome',
      dataIndex: '',
      key: '',
      render: (record) => (
        <p style={{marginBottom:'0'}}>{record?.Usuario?.nome}</p>
      ),
    },
    {
      title: 'Hemocentro',
      dataIndex: '',
      key: '',
      render: (record) => (
        <p style={{ marginBottom: '0' }}>{record?.Hemocentro?.nome}</p>
      )
    },
    {
      title: 'Situação',
      dataIndex: 'situacao',
      key: ''
    },
    {
      title: 'Ações',
      dataIndex: '',
      key: '',
      align: 'center',
      width: '150',
      render: (record) => {
        return (
          <Button type='primary' onClick={() => { }}>Realizar agendamento</Button>
        )
      }
    }
  ]

  return (
    <div className={Styles.container}>
      <img src={Logo} width={700} height={230} style={{ marginBottom: '20px' }} />
      <div className={Styles.select}>
        <Form.Item wrapperCol={{ span: 12 }} labelCol={{ span: 12 }} label="Selecione um hemocentro" rules={[{ required: true, message: 'É necessário selecionar um hemocentro' }]}>
          <Select placeholder="Selecione" style={{ width: '150px' }} onSelect={(e) => { pesquisarPorHemocentro(e) }}>
            {hemocentros?.map((h, index) => {
              return <Option key={index} value={h?.hemocentroID}>{h?.nome}</Option>
            })}
          </Select>
        </Form.Item>
      </div>
      <Table dataSource={agendamentos} columns={colunas} />
    </div>
  )
}

export default AgendamentoPorHemocentro