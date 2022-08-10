import Style from './Login.module.css'
import { Form, Input, Button, Select, Spin, message } from 'antd';
import Logo from '../../../public/Assets/img/logo.png'
import { useNavigate } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner'
import { useState } from 'react';
import React from 'react';

const Login = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const info = () => {
        message.success({
            content: 'Usuário logado com sucesso',
            duration: 3});
      }

    const onFinish = (values) => {
        setLoading(true)
        setTimeout(() => {
            info()
            navigate("/home")
        }, 1000)
        console.log(values);
    };

    const info2 = () =>{
        message.error({
            content:'Preencha o formulário corretamente',
            duration:3,
        })
    }

    const onFinishFailed = () => {
        info2()
    };

    return (
        <>
            <Spinner loading={loading}/>
            <div className={Style.logo}>
                <img src={Logo} width={500} height={190} alt=''/>
            </div>
            <Form
                name="basic"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={Style.form}
            >
                <fieldset className={Style.containerForm}>
                    <div className={Style.entrar}>Entrar</div>
                    <Form.Item
                        label={<p style={{ color: 'white', marginBottom: '0' }}>E-mail</p>}
                        name="email"
                        rules={[{ required: true, message: 'Campo e-mail obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder='Digite seu usuário' className={Style.input} style={{ border: '1px solid black', borderRadius: '10px' }} />
                    </Form.Item>

                    <Form.Item
                        label={<p style={{ color: 'white', marginBottom: '0' }}>Senha</p>}
                        name="senha"
                        rules={[{ required: true, message: 'Campo senha obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input.Password placeholder='Digite sua senha' className={Style.input} style={{ border: '1px solid black', borderRadius: '10px' }} />
                    </Form.Item>

                        
                    <div className={Style.btn}>
                        <Button type='primary' htmlType="submit" style={{ backgroundColor: '#AF0107', borderRadius: '10px', borderColor: '#AF0107', width: '90px' }}>
                            Entrar
                        </Button>
                    </div>
                </fieldset>
            </Form>
        </>
    )
}

export default Login