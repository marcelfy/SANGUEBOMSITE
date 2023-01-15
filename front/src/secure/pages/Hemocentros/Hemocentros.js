import Style from './Hemocentros.module.css'
import { Button, Form, message, Modal, Input } from 'antd'
import React, { useEffect, useState } from 'react';
import HemocentroService from '../../../service/HemocentroService.ts';
import HemocentroCard from '../../components/HemocentroCard/HemocentroCard.js';
import Logo from '../../../public/Assets/img/logo.png'
import MaskedInput from 'react-input-mask'

const Hemocentros = () => {

    const [hemocentros, setHemocentros] = useState([]);
    const [modal, setModal] = useState(false)
    const [form] = Form.useForm()
    const ehAdmin = window.location.pathname.includes('admin');

    useEffect(() => {
        HemocentroService.get().then((resp) => {
            setHemocentros(resp)
        })
    }, [])

    const onFinish = (values) => {
        HemocentroService.post(values).then((resp) => {
            if (resp.success) {
                message.success(resp.message)
                buscarHemocentros()
            }
        })
            .finally(() => { setModal(false) })
            .catch((error) => { })
    }

    const onFinishFailed = () => {
        message.error("Preencha o formulário corretamente")
    }

    function buscarEndereco() {
        try {
            var cep = form.getFieldValue("cep");
            cep = cep.replace(/\D/g, '');
            if (cep != "") {
                //Expressão regular para validar o CEP.
                var validacep = /^[0-9]{8}$/;
                if (validacep.test(cep)) {
                    fetch(`http://viacep.com.br/ws/${cep}/json`, { method: 'GET' }).then(response => response.json())
                        .then(response => {
                            form.setFieldsValue({
                                endereco: response.logradouro,
                                bairro: response.bairro,
                                cidade: response.localidade,
                                estado: response.uf,
                            })
                            //caso seja invalido a api retorna status 200,
                            //mas com uma mensagem de error
                            if (response.erro) {
                                message.error("CEP inválido");
                            };
                        }).catch(() => {
                            message.error("CEP inválido");
                        })
                        .finally(() => { })
                }
                else {
                    message.error("CEP inválido");
                }
            }
        } catch (erro) {
            return;
        }
    }

    function buscarHemocentros(){
        HemocentroService.get().then((resp) => {
            setHemocentros(resp)
        })
    }

    return (
        <>
            <div style={{ width: '100%', height: 'auto' }}>
                <div className={Style.logo}>
                    <img src={Logo} width={700} height={230} />
                </div>
                <div className={Style.titulo}>
                    <h2 style={{ fontSize: '30px', fontWeight: '650' }}>Hemocentros</h2>
                </div>
                {ehAdmin ?
                    <div className={Style.btnArea}>
                        <Button type='primary' onClick={() => setModal(true)}>Novo Hemocentro</Button>
                    </div>

                    : null}
                <div className={Style.container}>
                    {hemocentros.map((h, index) => {
                        return <HemocentroCard key={index} hemocentroID={h.hemocentroID} nome={h.nome} endereco={h.endereco}
                            numero={h.numero} bairro={h.bairro} cidade={h.cidade} estado={h.estado} ehAdmin={ehAdmin} buscar={buscarHemocentros}/>
                    })}
                </div>
                <Modal onCancel={() => setModal(false)} visible={modal} footer="" title="Editar Hemocentro">
                    <Form
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        form={form}
                    >
                        <div style={{ display: 'flex' }}>
                            <Form.Item
                                label="Nome"
                                name="nome"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                style={{ width: '60%' }}
                                rules={[{ required: true, message: 'Insira um nome' }]}
                            >
                                <Input placeholder='Digite o nome' style={{ width: '90%' }} />
                            </Form.Item>

                            <Form.Item
                                label="CEP"
                                name="cep"
                                style={{ width: '60%' }}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Informe o cep' }]}
                            >
                                <MaskedInput mask='99999-999' className={Style.input} placeholder="Informe o cep" style={{ border: '1px solid #d9d9d9', borderRadius: '2px', width: '90%' }} onBlur={buscarEndereco} />
                            </Form.Item>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <Form.Item
                                label="Endereço"
                                name="endereco"
                                style={{ width: '80%' }}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Informe um endereço' }]}
                            >
                                <Input placeholder='Digite o titulo' style={{ width: '90%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Bairro"
                                name="bairro"
                                style={{ width: '35%' }}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Informe um bairro' }]}
                            >
                                <Input placeholder='Digite o bairro' style={{ width: '90%' }} />
                            </Form.Item>

                        </div>
                        <div style={{ display: 'flex' }}>
                            <Form.Item
                                label="Cidade"
                                name="cidade"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                style={{ width: '60%' }}
                                rules={[{ required: true, message: 'Informe uma cidade' }]}
                            >
                                <Input placeholder='Digite a cidade' style={{ width: '90%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Estado"
                                name="estado"
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                style={{ width: '60%' }}
                                rules={[{ required: true, message: 'Informe um estado' }]}
                            >
                                <Input placeholder='Digite o estado' style={{ width: '90%' }} />
                            </Form.Item>
                            <Form.Item
                                label="Número"
                                name="numero"
                                style={{ width: '60%' }}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Informe o número' }]}
                            >
                                <Input placeholder='Digite o número' style={{ width: '90%' }} />
                            </Form.Item>
                        </div>
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
                </Modal>
            </div>
        </>
    )
}

export default Hemocentros