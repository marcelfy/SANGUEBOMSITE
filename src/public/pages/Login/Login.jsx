import Style from './Login.module.css'
import { Form, Input, Button, Select } from 'antd';
import Logo from '../../../public/Assets/img/logo.png'

const Login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className={Style.logo}>
                <img src={Logo} width={500} height={190} />
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
                        label={<p style={{ color: 'white', marginBottom: '0' }}>Usuário</p>}
                        name="user"
                        rules={[{ required: true, message: 'Campo nome obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder='Digite seu usuário' className={Style.input} style={{ border: '1px solid #B60707', borderRadius: '10px' }} />
                    </Form.Item>

                    <Form.Item
                        label={<p style={{ color: 'white', marginBottom: '0' }}>Senha</p>}
                        name="senha"
                        rules={[{ required: true, message: 'Campo senha obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input.Password placeholder='Digite sua senha' className={Style.input} style={{ border: '1px solid #B60707', borderRadius: '10px' }} />
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