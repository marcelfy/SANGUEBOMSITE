import Style from './Cadastro.module.css'
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'


const Cadastro = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <fieldset className={Style.form}>
            <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            >
            <Form.Item
                label="Nome"
                name="nome"
                rules={[{ required: true, message: 'Campo nome é obrigatório' }]}
            >
                <Input className={Style.input}/>
            </Form.Item>
        
            <Form.Item
                label="Senha"
                name="senha"
                rules={[{ required: true, message: 'O campo senha é obrigatório' }]}
            >
                <Input.Password className={Style.input}/>
            </Form.Item>
        
            
        
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" className={Style.input}>
                Cadastrar
                </Button>
            </Form.Item>
            </Form>
        </fieldset>
      )
}

export default Cadastro