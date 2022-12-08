import { Button, Form, message, Modal, Input, Popconfirm } from 'antd'
import React, { useState } from 'react'
import { ImLocation2 } from 'react-icons/im'
import Styles from './HemocentroCard.module.css'
import { AiOutlineEdit } from 'react-icons/ai'
import HemocentroService from '../../../service/HemocentroService.ts'
import MaskedInput from 'react-input-mask'

const HemocentroCard = (props) => {

    const [hemocentro, setHemocentro] = useState()
    const [modal, setModal] = useState(false)
    const [form] = Form.useForm()

    const onFinish = (values) => {
        HemocentroService.put(values, props.hemocentroID).then((resp) => {
            if (resp.success) {
                message.success(resp.message)
                window.location.reload()
            }
        })
            .finally(() => {
                setModal(false)
            })
            .catch((error) => { })

    }

    const onFinishFailed = () => {
        message.error("Preencha o formulário corretamente")
    }

    function preencherForm() {
        setModal(true)
        HemocentroService.getByHemocentroId(props?.hemocentroID).then((resp) => {
            form.setFieldsValue({
                nome: resp.nome,
                bairro: resp.bairro,
                cidade: resp.cidade,
                cep: resp.cep,
                estado: resp.estado,
                endereco: resp.endereco,
                numero: resp.numero
            })
        })
            .finally(() => { })
            .catch((error) => { })

    }

    function excluirHemocentro() {
        HemocentroService.delete(props.hemocentroID).then((resp) => {
            if (resp.success) {
                message.success(resp.message)
                setTimeout(() => {
                    window.location.reload()
                }, 500);
            } else {
                message.error("Não é possível apagar este hemocentro, pois existem agendamentos no mesmo")
            }
        }).finally(() => { })
            .catch((error) => { })
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

    return (
        <div className={Styles.card}>
            <p style={{ fontWeight: 'bold' }}>{props.nome}</p>
            <p><ImLocation2 size={17} /> {props.endereco}</p>
            <p>Nº {props.numero}, {props.bairro}</p>
            <p>{props.cidade} / {props.estado}</p>
            {props.ehAdmin ?
                <div className={Styles.btnAdmin}>
                    <Button type='primary' onClick={preencherForm}><AiOutlineEdit style={{ fontSize: '15px' }} />Editar</Button>
                    <Popconfirm
                        title="Deseja realmente excluir este hemocentro?"
                        onConfirm={excluirHemocentro}
                        okText="Sim"
                        cancelText="Não"
                    >
                        <Button type='primary' danger >Excluir</Button>
                    </Popconfirm>
                </div>
                :
                <Button type='primary' href={`/agendamento/${props.hemocentroID}`}>Agendar</Button>
            }
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
                            <MaskedInput mask='99999-999' className={Styles.input} placeholder="Informe o cep" style={{ border: '1px solid #d9d9d9', borderRadius: '2px', width: '90%' }} onBlur={buscarEndereco} />
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
                    <div className={Styles.btnAreaa}>
                        <Form.Item>
                            <Button danger onClick={() => setModal(false)} className={Styles.btn} style={{ backgroundColor: '#B60707', borderRadius: '10px', borderColor: '#B60707', width: '110px', color: 'white' }} >
                                <a >Voltar</a>
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={Styles.btn} style={{ backgroundColor: '#12c512', borderRadius: '10px', borderColor: '#12c512', width: '110px' }}>
                                Editar
                            </Button>
                        </Form.Item>
                    </div>

                </Form>
            </Modal>

        </div>
    )
}

export default HemocentroCard;