import Style from './Campanha.module.css'
import React, { useEffect, useState } from 'react'
import { BiDonateBlood } from 'react-icons/bi'
import Logo from '../../../public/Assets/img/logo.png'
import CampanhaService from '../../../service/CampanhaService.ts'
import CampanhaCard from '../../components/CampanhaCard/CampanhaCard'
import { Button, Modal, Form, message, Input, Select, notification } from 'antd'
import { Spin } from 'antd'
import { useNavigate } from 'react-router-dom'

const Campanha = () => {

    const [campanhas, setCampanhas] = useState()
    const [loading, setLoading] = useState(false)
    const [modal, setModal] = useState(false)
    const { Option } = Select;
    const { TextArea } = Input;
    const [form] = Form.useForm()
    const usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"))
    const ehAdmin = usuarioLogado?.Perfil?.nome == "Admin" || false
    const navigate = useNavigate()

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

    useEffect(() => {
        CampanhaService.get().then((resp) => {
            if (ehAdmin) {
                setCampanhas(resp.filter((c) => c.ativo == false))
            } else {
                setCampanhas(resp.filter((c) => c.ativo == true))
            }
        })
    }, [])

    const onFinish = (values) => {

        let campanha = {
            titulo: values.titulo,
            tipoSangue: values.tipoSangue,
            descricao: values.descricao,
            ativo: false,
        }
        CampanhaService.post(campanha)
            .then((resp) => {
                setLoading(true)
                if (resp.success) {
                    message.success({
                        duration: 5,
                        content: resp.data
                    })
                    resetarForm()
                    pesquisarCampanhas()
                }
            })
            .finally(() => setLoading(false))
            .catch((err) => {
                notification.error({
                    message: 'Necessário realizar o login',
                    description:
                        <p>{err.response.data?.message} <br /><a href='/login' style={{ fontWeight: 'bold' }}>Fazer login</a></p>,
                    style: {
                        height: err.response.status == 500 ? 120 : 100
                    },
                    duration: 5
                })
                sessionStorage.clear()
                setTimeout(() => {
                    navigate('/login')
                }, 5000);
            })

    }

    function resetarForm() {
        form.resetFields()
        setModal(false)
    }

    const onFinishFailed = () => {
        message.error("Preencha o formulário corretamente")
    }

    const pesquisarCampanhas = () => {
        CampanhaService.get().then((resp) => {
            if (ehAdmin) {
                setCampanhas(resp.filter((c) => c.ativo == false))
            } else {
                setCampanhas(resp.filter((c) => c.ativo == true))
            }
        })
    }

    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <div className={Style.container}>
                <img src={Logo} className={Style.img} />

                <BiDonateBlood size={50} style={{ color: 'red' }} />
                <h1 style={{ color: 'red' }}>Campanhas</h1>

                {!ehAdmin ?
                    <div className={Style.btnArea}>
                        <Button type='primary' onClick={() => setModal(true)}>Nova Campanha</Button>
                    </div>

                    : null}
                {campanhas?.length == 0 && !ehAdmin ?
                    <div>
                        <h2>Não existem campanhas cadastradas/aprovadas</h2>
                    </div> : null
                }
                {campanhas?.length == 0 && ehAdmin ?
                    <div>
                        <h2 style={{ marginBottom: '1.3em' }}>Não existem campanhas para serem aprovadas</h2>
                    </div> : null
                }
                <div className={Style.campanhaCard}>
                    {campanhas?.map((c, key) => {
                        return <CampanhaCard key={key} titulo={c.titulo} tipoSangue={c.tipoSangue} descricao={c.descricao} ehAdmin={ehAdmin} id={c.campanhaID} buscar={pesquisarCampanhas} />
                    })}
                </div>
            </div>
            <Modal onCancel={() => { resetarForm() }} onOk={() => onFinish} visible={modal} title="Cadastrar Nova Campanha"
                okText="Cadastrar" cancelText="Voltar" footer={''}>
                <Spin spinning={loading}>
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        form={form}
                    >
                        <div style={{ display: 'flex' }}>
                            <Form.Item
                                label="Titulo"
                                name="titulo"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                style={{ width: '90%' }}
                                rules={[{ required: true, message: 'Insira um título' }]}
                            >
                                <Input placeholder='Digite o titulo' style={{ width: '90%' }} />
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
                                        return <Option key={index} value={a.tipo}><p>{a.tipo}</p></Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Descrição"
                            name="descricao"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Informe uma descrição' }]}
                        >
                            <TextArea showCount rows={5} maxLength={255} placeholder="Digite a descrição" />
                        </Form.Item>
                        <div className={Style.btnAreaa}>
                            <Form.Item>
                                <Button danger onClick={() => setModal(false)} className={Style.btn} style={{ backgroundColor: '#B60707', borderRadius: '10px', borderColor: '#B60707', width: '110px', color: 'white' }} >
                                    <a >Voltar</a>
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className={Style.btn} style={{ backgroundColor: '#12c512', borderRadius: '10px', borderColor: '#12c512', width: '110px' }}>
                                    Cadastrar
                                </Button>
                            </Form.Item>
                        </div>

                    </Form>
                </Spin>
            </Modal>
        </div >
    )
}

export default Campanha;
