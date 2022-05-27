import Style from './Cadastro.module.css'
import { Form, Input, Button, Select } from 'antd';
import 'antd/dist/antd.css'
import MaskedInput from 'react-input-mask';
import FormItem from 'antd/lib/form/FormItem';
import Logo from '../../../img/logo.png'

const Cadastro = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log(errorInfo);
    };

    const { Option } = Select;

    var tipoSanguineo = [
        {tipo: 'A+', key:1},
        {tipo: 'A-', key:2},
        {tipo: 'B+', key:3},
        {tipo: 'B-', key:4},
        {tipo: 'AB+', key:5},
        {tipo: 'AB-', key:6},
        {tipo: 'O+', key:7},
        {tipo: 'O-', key:8}

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

    return (
        <>
            <div className={Style.logo}>
                <img src={Logo} width={390} height={190}></img>
            </div>
            <div className={Style.title}>Cadastro de Doador</div>
            <Form
                style={{ padding: '15px', marginBottom: '4em' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={Style.form}
            >
                <fieldset >
                    <div className={Style.groupItem}>
                        <Form.Item
                            label="Nome"
                            name="nome"
                            rules={[{ required: true, message: 'Campo nome é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <Input className={Style.input} placeholder="Digite seu nome" />
                        </Form.Item>
                        <Form.Item
                            label="Telefone"
                            name="telefone"
                            rules={[{ required: true, message: 'Campo telefone é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <MaskedInput mask='(99) 99999 9999' className={Style.input} placeholder="Informe o telefone" />
                        </Form.Item>

                    </div>

                    <div className={Style.groupItem}>
                        <Form.Item
                            label="Data de Nascimento"
                            name="dataNascimento"
                            rules={[{ required: true, message: 'Campo Data de Nascimento é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                            style={{ width: '50%' }}
                        >
                            <MaskedInput mask="99/99/9999" className={Style.input} placeholder="Informe a data de nascimento" />
                        </Form.Item>

                        <Form.Item
                            label="CPF"
                            name="cpf"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo cpf é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <MaskedInput mask="999.999.999-99" className={Style.input} placeholder="Informe o CPF" />
                        </Form.Item>
                    </div>
                    <div className={Style.groupItem}>
                        <Form.Item
                            label="Email"
                            name="email"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo email é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite seu email' className={Style.input} />
                        </Form.Item>
                        <Form.Item
                            label="Senha"
                            name="senha"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo senha é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input.Password className={Style.input} placeholder="Digite a senha" />
                        </Form.Item>
                    </div>
                    <div className={Style.groupItem}>

                        <FormItem
                            label="Cidade"
                            name="cidade"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'Selecione uma cidade' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite uma cidade' className={Style.input} />
                        </FormItem>

                        <div className={Style.groupItem}>

                            <FormItem
                                label="UF"
                                name="uf"
                                rules={[{ required: true, message: 'Selecione uma UF' }]}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                                style={{ width: '169px' }}
                            >


                                <Select defaultValue="Selecione" style={{ width: '200px' }} >
                                    {estados.map((estado) => (
                                        <Option key={estado.id} value={estado.nome}><p style={{ fontSize: '13px' }}>{estado.nome}</p></Option>
                                    ))}
                                </Select>
                            </FormItem>
                            <FormItem
                                label="Tipo Sanguíneo"
                                name="tipoSanguineo"
                                rules={[{ required: true, message: 'Selecione um tipo sanguíneo' }]}
                                labelCol={{ span: 24 }}
                                style={{ width: '169px' }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Select defaultValue="Selecione" style={{ width: '169px' }} >
                                    {tipoSanguineo.map((tipo)=>(
                                        <Option key={tipo.key} value={tipo.tipo}>{tipo.tipo}</Option>
                                    ))}
                                </Select>
                            </FormItem>
                        </div>

                    </div>

                    <div className={Style.btnArea}>
                        <Form.Item>
                            <Button danger className={Style.btn}>
                                Voltar
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className={Style.btn}>
                                Cadastrar
                            </Button>
                        </Form.Item>
                    </div>

                </fieldset>
            </Form>
        </>
    )
}

export default Cadastro