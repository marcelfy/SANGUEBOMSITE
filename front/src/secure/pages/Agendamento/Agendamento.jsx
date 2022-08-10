import Styles from './Agendamento.module.css'
import { Form, Input, message, Button } from 'antd'
import Logo from '../../../public/Assets/img/logo.png'
import { BsCalendar3 } from 'react-icons/bs'
import MaskedInput from 'react-input-mask';
import { DatePicker, Space, TimePicker } from 'antd';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../../public/components/Spinner/Spinner';
import { useState } from 'react';
import React from 'react';

const Agendamento = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onFinish = (values) => {
        setLoading(true)
        setTimeout(() => {
            info()
            navigate("/home")
        }, 1000)
        console.log(values);
    }

    const onFinishFailed = () => {
        info2()
    }



    const info = () => {
        message.success({
            content: 'Agendamento realizado com sucesso',
            duration: 3
        });
    }

    const info2 = () => {
        message.error({
            content: 'Preencha o formulário corretamente',
            duration: 3,
        })
    }

    return (
        <>
            <Spinner loading={loading}/>
            <div className={Styles.logo}>
                <img src={Logo} width={700} height={230} />
            </div>
            <BsCalendar3 className={Styles.calendario} style={{ marginBottom: '15px' }} />
            <div className={Styles.container}>
                <b>Agende sua Doação</b>
                <p>Atendimento ágil e eficaz para os doadores de sangue, com hora marcada.</p>
            </div>

            <Form
                style={{ padding: '15px', marginBottom: '15em' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={Styles.form}
            >
                <fieldset className={Styles.containerForm}>
                    <Form.Item
                        label={<p style={{ color: 'white', marginBottom: '0' }}>Nome Completo</p>}
                        name="nome"
                        rules={[{ required: true, message: 'Campo nome é obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        style={{ width: '100%' }}
                    >
                        <Input className={Styles.input} placeholder="Digite seu nome" style={{ border: '1px solid black', borderRadius: '10px' }} />
                    </Form.Item>
                    <div style={{ display: 'flex' }}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>CPF</p>}
                            name="cpf"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo cpf é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}

                        >
                            <MaskedInput mask="999.999.999-99" className={Styles.input} placeholder="Informe o CPF" style={{ borderRadius: '10px', border: '1px solid black', width:'90%' }} />
                        </Form.Item>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Data de Nascimento</p>}
                            name="dataNascimento"
                            rules={[{ required: true, message: 'Campo Data de Nascimento é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '60%' }}
                        >
                            <MaskedInput mask="99/99/9999" className={Styles.input} placeholder="Informe a data de nascimento" style={{ borderRadius: '10px', border: '1px solid black', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Telefone</p>}
                            name="telefone"
                            rules={[{ required: true, message: 'Campo telefone é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <MaskedInput mask='(99) 99999 9999' className={Styles.input} placeholder="Informe o telefone" style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }} />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label={<p style={{ color: 'white', marginBottom: '0' }}>E-mail</p>}
                        name="email"
                        style={{ width: '100%' }}
                        rules={[{ required: true, message: 'O campo email é obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder='Digite seu email' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }} />
                    </Form.Item>

                    <p style={{ display: 'flex', justifyContent: 'center', fontSize: '15px' }}><b>Endereço</b></p>

                    <div style={{ display: 'flex' }}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>CEP</p>}
                            name="cep"
                            rules={[{ required: true, message: 'Campo CEP é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <MaskedInput mask="99999-999" className={Styles.input} placeholder="Informe o cep" style={{ borderRadius: '10px', border: '1px solid black', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Endereço</p>}
                            name="endereco"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo endereço é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite seu endereço' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Bairro</p>}
                            name="bairro"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo bairro é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite o bairro' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
                        </Form.Item>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Estado</p>}
                            name="estado"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo estado é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite o estado' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Cidade</p>}
                            name="cidade"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo cidade é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite a cidade' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Número</p>}
                            name="numero"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo número é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite o número' className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }} />
                        </Form.Item>

                    </div>

                    <p style={{ display: 'flex', fontSize: '15px', justifyContent: 'center' }}><b>Agendamento de Horário* De Segunda a Sexta-feira das 08h:00m às 14h:00m -&gt; 30 minutos para cada agendamento.</b> </p>
                   
                    <div style={{display:'flex'}}>
                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Data</p>}
                            name="data"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo data é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <DatePicker style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} format={'DD/MM/YYYY'} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Horario</p>}
                            name="horario"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo horario é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <TimePicker style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }}/>
                        </Form.Item>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <Form.Item>
                            <Button  type="primary" htmlType="submit" className={Styles.btn} style={{backgroundColor:'#AF0107', borderRadius:'10px', borderColor:'#AF0107', width:'150px'}}>
                                Agendar
                            </Button>
                    </Form.Item>
                    </div>
                </fieldset>
            </Form>
        </>
    )
}

export default Agendamento