import React, { useEffect, useState } from 'react'
import Styles from './EditarDados.module.css'
import Logo from '../../../public/Assets/img/logo.png'
import { Form, Button, Select, Input, Checkbox, message } from 'antd'
import { unmaskCPF, validaCPF, validarSenha } from '../../../utils.js';
import MaskedInput from 'react-input-mask';
import UsuarioService from '../../../service/UsuarioService.ts'
import { useNavigate } from 'react-router-dom';

function EditarDados() {

    const { Option } = Select;
    const [form] = Form.useForm()
    const [usuarioLogado, setUsuarioLogado] = useState()
    const navigate = useNavigate()

    useEffect(()=>{
        setUsuarioLogado(JSON.parse(sessionStorage.getItem("usuarioLogado")))
        form.setFieldsValue(JSON.parse(sessionStorage.getItem("usuarioLogado")))
    },[])


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
    var estados = [
        { uf: 'AC', nome: 'Acre', id: 1 },
        { uf: 'AL', nome: 'Alagoas', id: 2 },
        { uf: 'AP', nome: 'Amapá', id: 3 },
        { uf: 'AM', nome: 'Amazonas', id: 4 },
        { uf: 'BA', nome: 'Bahia', id: 5 },
        { uf: 'CE', nome: 'Ceará', id: 6 },
        { uf: 'DF', nome: 'Distrito Federal', id: 7 },
        { uf: 'ES', nome: 'Espirito Santo', id: 8 },
        { uf: 'GO', nome: 'Goiás', id: 9 },
        { uf: 'MA', nome: 'Maranhão', id: 10 },
        { uf: 'MS', nome: 'Mato Grosso do Sul', id: 11 },
        { uf: 'MT', nome: 'Mato Grosso', id: 12 },
        { uf: 'MG', nome: 'Minas Gerais', id: 13 },
        { uf: 'PA', nome: 'Pará', id: 14 },
        { uf: 'PB', nome: 'Paraíba', id: 15 },
        { uf: 'PR', nome: 'Paraná', id: 16 },
        { uf: 'PE', nome: 'Pernambuco', id: 17 },
        { uf: 'PI', nome: 'Piauí', id: 18 },
        { uf: 'RJ', nome: 'Rio de Janeiro', id: 19 },
        { uf: 'RN', nome: 'Rio Grande do Norte', id: 20 },
        { uf: 'RS', nome: 'Rio Grande do Sul', id: 21 },
        { uf: 'RO', nome: 'Rondônia', id: 22 },
        { uf: 'RR', nome: 'Roraima', id: 23 },
        { uf: 'SC', nome: 'Santa Catarina', id: 24 },
        { uf: 'SP', nome: 'São Paulo', id: 25 },
        { uf: 'SE', nome: 'Sergipe', id: 26 },
        { uf: 'TO', nome: 'Tocantins', id: 27 }
    ]

    const validarSenhaForm = () => {

        var senha = form.getFieldValue("senha")

        if (validarSenha(senha) === false) {
            message.error('A senha não atende as regras')
            return Promise.reject()
        }
        return Promise.resolve()
    }

    const validarCpfForm = () => {

        var cpf = form.getFieldValue("cpf").toString()
        if (validaCPF(unmaskCPF(cpf)) === false) {
            message.error("Cpf inválido");
            return Promise.reject()
        }
        return Promise.resolve()
    }

    const validarEmail = () => {
        var email = form.getFieldValue("email")
        const expressaoRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (expressaoRegular.test(email) === false) {
            message.error("Email inválido");
            return Promise.reject()
        }
        return Promise.resolve()
    }

    const onFinish = (values) =>{
        values.usuarioID = usuarioLogado.usuarioID
        UsuarioService.put(values).then((resp)=> {
            if(resp.success){
                sessionStorage.setItem("usuarioLogado", JSON.stringify({...values, Perfil: usuarioLogado?.Perfil}))
                message.success(resp?.message)
                navigate("/")
            }
        })
    }

    const onFinishFailed = () => {

    }


    return (
        <div className={Styles.container}>
            <img src={Logo} className={Styles.img} />
            <h1 style={{fontSize: '2em', fontWeight:'bold', marginBottom: '-30px'}}>Alterar Dados</h1>
            <Form
                style={{ padding: '15px', marginBottom: '2em' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={Styles.form}
                form={form}
            >
                <fieldset className={Styles.containerForm}>
                    <div className={Styles.groupItem}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Nome</p>}
                            name="nome"
                            rules={[{ required: true, message: 'Campo nome é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <Input className={Styles.input} placeholder="Digite seu nome" style={{ border: '1px solid black', borderRadius: '10px' }} />
                        </Form.Item>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Telefone</p>}
                            name="telefone"
                            rules={[{ required: true, message: 'Campo telefone é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <MaskedInput mask='(99) 99999 9999' className={Styles.input} placeholder="Informe o telefone" style={{ border: '1px solid black', borderRadius: '10px' }} />
                        </Form.Item>

                    </div>

                    <div className={Styles.groupItem}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Data de Nascimento</p>}
                            name="dataNascimento"
                            rules={[{ required: true, message: 'Campo Data de Nascimento é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <MaskedInput mask="99/99/9999" className={Styles.input} placeholder="Informe a data de nascimento" style={{ borderRadius: '10px' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>CPF</p>}
                            name="cpf"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo cpf é obrigatório' }, { validator: validarCpfForm, message: "Cpf inválido", validateTrigger: 'onSubmit' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}

                        >
                            <MaskedInput mask="999.999.999-99" className={Styles.input} placeholder="Informe o CPF" style={{ borderRadius: '10px' }} disabled={true}/>
                        </Form.Item>
                    </div>
                    <div className={Styles.groupItem}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>E-mail</p>}
                            name="email"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo email é obrigatório' }, { validator: validarEmail, validateTrigger: 'onSubmit', message: "Email inválido" }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite seu email' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px' }} />
                        </Form.Item>
                    </div>
                    <div className={Styles.groupItem}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>UF</p>}
                            name="uf"
                            rules={[{ required: true, message: 'Selecione uma UF' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '187px' }}

                        >
                            <Select defaultValue="Selecione" style={{ width: '200px', border: '1px solid black', borderRadius: '10px', backgroundColor: '#fff' }} bordered={false}>
                                {estados.map((estado, index) => (
                                    <Option key={index} value={estado.nome}><p style={{ fontSize: '13px' }}>{estado.nome}</p></Option>
                                ))}
                            </Select>
                        </Form.Item>


                        <div className={Styles.groupItem}>

                            <Form.Item
                                label={<p style={{ color: 'white', marginBottom: '0' }}>Cidade</p>}
                                name="cidade"
                                style={{ width: '40%' }}
                                rules={[{ required: true, message: 'Selecione uma cidade' }]}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Input placeholder='Digite uma cidade' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', marginLeft: '10px' }} />
                            </Form.Item>
                            <Form.Item
                                label={<p style={{ color: 'white', marginBottom: '0' }}>Tipo Sanguineo</p>}
                                name="tipoSanguineo"
                                labelCol={{ span: 24 }}
                                style={{ width: '169px' }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Select defaultValue="Selecione" style={{ width: '169px', border: '1px solid black', borderRadius: '10px', backgroundColor: '#fff' }} bordered={false}>
                                    {tipoSanguineo.map((tipo, index) => (
                                        <Option key={index} value={tipo.tipo}>{tipo.tipo}</Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="medula"
                                valuePropName="checked"
                                labelCol={{ span: 24 }}
                                initialValue={false}
                                style={{ width: '169px' }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Checkbox style={{ marginTop: '45px', color: 'white' }}>Gostaria de doar medula óssea?</Checkbox>
                            </Form.Item>
                        </div>

                    </div>

                    <div className={Styles.btnArea}>
                        <Form.Item>
                            <Button danger className={Styles.btn} style={{ backgroundColor: '#B60707', borderRadius: '10px', borderColor: '#B60707', width: '150px', color: 'white' }}>
                                <a href='/'>Voltar</a>
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={Styles.btn} style={{ backgroundColor: '#12c512', borderRadius: '10px', borderColor: '#12c512', width: '150px' }}>
                                Editar
                            </Button>
                        </Form.Item>
                    </div>

                </fieldset>
            </Form>
        </div>
    )
}

export default EditarDados