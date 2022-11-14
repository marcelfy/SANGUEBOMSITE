import Style from './Campanha.module.css'
import React, { useEffect, useState } from 'react'
import { BiDonateBlood } from 'react-icons/bi'
import Logo from '../../../public/Assets/img/logo.png'
import CampanhaService from '../../../service/CampanhaService.ts'
import CampanhaCard from '../../components/CampanhaCard/CampanhaCard'
import { Button, Modal, Form, message, Input, Select } from 'antd'

const Campanha = () => {

    const [campanhas, setCampanhas] = useState()
    const [modal, setModal] = useState(false)
    const { Option } = Select;
    const { TextArea } = Input;

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
            setCampanhas(resp) 
        })
    }, [])

    const onFinish = (values) => {
        console.log(values);
    }

    const onFinishFailed = () => {

    }

    return (
        <div style={{ width: '100%', height: 'auto' }}>
            <div className={Style.container}>
                <img src={Logo} width={700} height={230} />
                <BiDonateBlood size={50} style={{ color: 'red' }} />
                <h1 style={{ color: 'red' }}>Campanhas</h1>

                <div className={Style.campanhaCard}>
                    {campanhas?.map((c, key) => {
                        return <CampanhaCard titulo={c.titulo} tipoSangue={c.tipoSangue} descricao={c.descricao} />
                    })}
                </div>
                <div className={Style.btnArea}>
                    <Button type='primary' onClick={() => setModal(true)}>Nova Campanha</Button>
                </div>
            </div>
            <Modal onCancel={() => setModal(false)} onOk={() => onFinish} visible={modal} title="Cadastrar Nova Campanha" 
            okText="Cadastrar" cancelText="Voltar" footer={''}>
                <Form
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <div style={{display:'flex'}}>
                        <Form.Item
                            label="Titulo"
                            name="titulo"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{width:'90%'}}
                            rules={[{ required: true, message: 'Insira um título' }]}
                        >
                            <Input placeholder='Digite o titulo' style={{width:'90%'}}/>
                        </Form.Item>

                        <Form.Item
                            label="Tipo Sanguíneo"
                            name="tipoSangue"
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            rules={[{ required: true, message: 'Informe o tipo sanguíneo' }]}
                        >
                            <Select placeholder="Selecione">
                                {tipoSanguineo.map((a, index)=>{
                                    return <Option key={a.key} value={a.tipo}><p>{a.tipo}</p></Option>
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
                            <TextArea rows={5} placeholder="Digite a descrição"/>
                        </Form.Item>
                        <div className={Style.btnAreaa}>
                        <Form.Item>
                            <Button danger className={Style.btn} style={{backgroundColor:'#B60707', borderRadius:'10px', borderColor:'#B60707', width:'110px', color:'white'}}>
                                <a href='/'>Voltar</a>
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button  type="primary" htmlType="submit" className={Style.btn} style={{backgroundColor:'#12c512', borderRadius:'10px', borderColor:'#12c512', width:'110px'}}>
                                Cadastrar
                            </Button>
                        </Form.Item>
                    </div>
                    
                </Form>
            </Modal>
        </div>
    )
}

export default Campanha;
