import Style from './Login.module.css'
import { Form, Input, Button, Select } from 'antd';
import Logo from '../../../img/logo.png'

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
                <img src={Logo} width={500} height={200} />
            </div>
            <div className={Style.entrar}>Entrar</div>
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
                <fieldset>
                    <Form.Item
                        label="Usuário"
                        name="user"
                        rules={[{ required: true, message: 'Campo nome obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input placeholder='Digite seu usuário' className={Style.input} style={{border:'1px solid #B60707', borderRadius:'10px'}}/>
                    </Form.Item>

                    <Form.Item
                        label="Senha"
                        name="senha"
                        rules={[{ required: true, message: 'Campo senha obrigatório' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input.Password placeholder='Digite sua senha' className={Style.input}  style={{border:'1px solid #B60707', borderRadius:'10px'}}/>
                    </Form.Item>
                    <Button type="primary" htmlType="submit">
                        Entrar
                    </Button>
                </fieldset>
            </Form>
        </>
    )
}

export default Login