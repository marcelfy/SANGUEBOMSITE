import React, { useState, useEffect } from 'react'
import Styles from './AgendamentoPorHemocentro.module.css'
import { Table, Button, Select, Form, message, Input, Spin } from 'antd'
import AgendamentoService from '../../../service/AgendamentoService.ts'
import HemocentroService from '../../../service/HemocentroService.ts'
import Logo from '../../../public/Assets/img/logo.png'
import Modal from 'antd/lib/modal/Modal'
import DoacaoService from '../../../service/DoacaoService.ts'

const AgendamentoPorHemocentro = () => {

  const [loading, setLoading] = useState(false)
  const [agendamentos, setAgendamentos] = useState()
  const [agendamentoID, setAgendamentoID] = useState()
  const [usuarioID, setUsuarioID] = useState()
  const [hemocentros, setHemocentros] = useState()
  const [modal, setModal] = useState(false)
  const { Option } = Select;
  const [form] = Form.useForm()

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


  const onFinish = (values) => {
    let doacao = {
      usuarioID : usuarioID,
      tipoSangue : values.tipoSangue,
      quantidade : values.quantidade
    }

    DoacaoService.post(doacao)
    .then((resp)=> {
      setLoading(true)
      if(resp?.success){
        message.success("Agendamento realizado com sucesso")
        setModal(false)
        form.resetFields()
        realizarAgendamento()
        AgendamentoService.get().then((resp)=> setAgendamentos(resp))    
      }
    })
    .finally(()=>{setLoading(false)})

  }

  const realizarAgendamento = () =>{
    AgendamentoService.realizarAgendamento(agendamentoID)
    
    window.location.reload()
  }

  const onFinishFailed = () => {
    message.error("Preencha o formulário corretamente")
  }

  var tipoSanguineo = [
    { tipo: 'A+', key: 1 },
    { tipo: 'A-', key: 2 },
    { tipo: 'B+', key: 3 },
    { tipo: 'B-', key: 4 },
    { tipo: 'AB+', key: 5 },
    { tipo: 'AB-', key: 6 },
    { tipo: 'O+', key: 7 },
    { tipo: 'O-', key: 8 }

  ]

  const desabilitarBotao = (situacao) => {
    if(situacao == "Aberto"){
      return false
    }else{
      return true
    }
  }

  const colunas = [
    {
      title: 'Nome',
      dataIndex: '',
      key: '',
      render: (record) => (
        <p style={{ marginBottom: '0' }}>{record?.Usuario?.nome}</p>
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
          <Button type='primary' onClick={() => { setModal(true); setUsuarioID(record?.usuarioID); setAgendamentoID(record?.agendamentoID)}} disabled={desabilitarBotao(record?.situacao)}>Realizar agendamento</Button>
        )
      }
    }
  ]

  return (
    <Spin spinning={loading}>
      <div className={Styles.container}>
        <img src={Logo} width={700} height={230} style={{ marginBottom: '20px' }} alt=""/>
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
        <Modal visible={modal} onCancel={() => setModal(false)} footer={""}>
          <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div style={{ display: 'flex' }}>
              <Form.Item
                label="Quantidade (em mililitros)"
                name="quantidade"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                style={{ width: '90%' }}
                rules={[{ required: true, message: 'Informe uma quantidade' }]}
              >
                <Input placeholder='Digite a quantidade' style={{ width: '90%' }} />
              </Form.Item>

              <Form.Item
                label="Tipo Sanguíneo"
                name="tipoSangue"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: 'Informe o tipo sanguíneo' }]}
              >
                <Select placeholder="Selecione">
                  {tipoSanguineo.map((a, index) => {
                    return <Option key={a.key} value={a.tipo}><p>{a.tipo}</p></Option>
                  })}
                </Select>
              </Form.Item>
            </div>
            <div className={Styles.btnAreaa}>
              <Form.Item>
                <Button danger className={Styles.btn} style={{ backgroundColor: '#B60707', borderRadius: '10px', borderColor: '#B60707', width: '110px', color: 'white' }}>
                  <a onClick={() => setModal(false)}>Voltar</a>
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className={Styles.btn} style={{ backgroundColor: '#12c512', borderRadius: '10px', borderColor: '#12c512', width: '180px' }}>
                  Realizar agendamento
                </Button>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </div>
    </Spin>
  )
}

export default AgendamentoPorHemocentro