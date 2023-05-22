import React, { useEffect, useState } from 'react'
import Styles from './EstoqueSangue.module.css'
import Logo from '../../Assets/img/logo.png'
import EstoqueSangueService from '../../../service/EstoqueSangueService.ts'
import EstoqueSangueComponent from '../../components/EstoqueSangueComponent/EstoqueSangueComponent'
import { Button, Form, Input, message, Modal } from 'antd'

const EstoqueSangue = () => {

  const [estoqueSangue, setEstoqueSangue] = useState([])

  const [modal, setModal] = useState(false)

  const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"))

  const ehAdmin = usuarioLogado?.Perfil?.nome == "Admin" || false
  
  const [form] = Form.useForm()

  useEffect(() => {
    EstoqueSangueService.get()
      .then((resp) => {
        setEstoqueSangue(resp)
      })
  }, [])

  function calcularPercentual(max, quantidade) {
    return quantidade / max * 100
  }

  function atualizarQuantidade(quantidade, id) {
    let quantidadeMaxima = {
      quantidadeMaxima: quantidade
    }
    EstoqueSangueService.atualizarEstoqueMaximo(quantidadeMaxima, id).then((resp) => {
      message.success("Quantidade alterada com sucesso")
    })
      .finally(() => {
        EstoqueSangueService.get()
          .then((resp) => {
            setEstoqueSangue(resp)
          })
      })
      .catch(() => { })
  }

  function preencherForm() {
    estoqueSangue.map((e, index) => {
      form.setFieldsValue({
        ["quantidadeMaxima" + e?.estoqueSangueID]: e?.quantidadeMaxima,
      })
    })
  }

  return (
    <div className={Styles.container}>
      <div >
        <img src={Logo} alt='' className={Styles.logo} style={{ marginBottom: '30px' }} />
      </div>
      <b style={{ fontSize: 30 }}>Estoque de <b style={{ color: 'red' }}>Sangue</b></b>
      {ehAdmin ?
        <div className={Styles.btn}>
          <Button type='primary' size='large' onClick={() => { setModal(true); preencherForm() }}>Editar Estoques de Sangue</Button>
          <Modal visible={modal} onCancel={() => setModal(false)} footer='' width={700}>
            <h2 style={{ textAlign: 'center' }}><b>Estoques de Sangue</b></h2>
            <Form form={form}>
              {estoqueSangue?.map((estoque, index) => {
                return <div key={index} className={Styles.form}>
                  <Form.Item
                    label="Tipo Sanguíneo"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                  >
                    <Input value={estoque?.tipoSangue} disabled style={{ width: '90%' }} />
                  </Form.Item>
                  <Form.Item
                    label="Quantidade Total (mililitro)"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}>
                    <Input value={estoque?.quantidadeTotal + " ml"} disabled style={{ width: '90%' }} />
                  </Form.Item>
                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    label="Quantidade Máxima (mililitro)"
                    name={"quantidadeMaxima" + estoque?.estoqueSangueID}
                  >
                    <Input placeholder="Digite a quantidade máxima" style={{ width: '90%' }} onBlur={(e) => atualizarQuantidade(e.target.value, estoque?.estoqueSangueID)} />
                  </Form.Item>
                </div>
              })}
              <Form.Item style={{ textAlign: 'center' }}>
                <Button danger onClick={() => setModal(false)} className={Styles.botao} style={{ backgroundColor: '#B60707', borderRadius: '10px', borderColor: '#B60707', width: '110px', color: 'white' }} >
                  <a>Voltar</a>
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </div>
        : null}
      <div className={Styles.graficoArea}>
        {estoqueSangue?.map((e, index) => {
          return <EstoqueSangueComponent key={index} percentual={calcularPercentual(e.quantidadeMaxima, e.quantidadeTotal)} tipoSangue={e.tipoSangue} />
        })}
      </div>
    </div>
  )
}

export default EstoqueSangue