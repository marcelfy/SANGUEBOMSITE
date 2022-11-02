import Styles from './Agendamento.module.css'
import { Form, Input, message, Button } from 'antd'
import Logo from '../../../public/Assets/img/logo.png'
import { BsCalendar3 } from 'react-icons/bs'
import MaskedInput from 'react-input-mask';
import { DatePicker, Space, TimePicker } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../../public/components/Spinner/Spinner';
import { useEffect, useState } from 'react';
import locale from 'antd/es/date-picker/locale/pt_BR';
import React from 'react';
import {default as localeTimePicker} from 'antd/lib/time-picker/locale/pt_BR'
import HemocentroService from '../../../service/HemocentroService.ts';
import AgendamentoService from '../../../service/AgendamentoService.ts';
import moment from 'moment';

const Agendamento = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    const [form] = Form.useForm()
    
    const {hemocentroID} = useParams();

    const usuarioLogado = JSON.parse(sessionStorage.getItem('usuarioLogado'));

    useEffect(()=>{
        HemocentroService.getByHemocentroId(hemocentroID).then((resp)=>{
            form.setFieldsValue({
                cep: resp.cep,
                endereco: resp.endereco,
                bairro: resp.bairro,
                estado: resp.estado,
                cidade: resp.cidade,
                numero: resp.numero,
            })
        })

    },[])

    const onFinish = (values) => {
        setLoading(true)

        let agendamento = {
            usuarioID : usuarioLogado.usuarioID,
            situacao: 'Aberto',
            data: values.data,
            hemocentroID: hemocentroID,
            horario: moment(values.horario).format('HH:mm'),
        }

        // console.log(agendamento);
        // console.log(usuarioLogado);

        AgendamentoService.post(agendamento).then((resp)=>{
            if(resp.success){
                setTimeout(() => {
                    message.success({
                        content: resp.message,
                        duration: 3
                    });
                }, 500)
                
            }
        })
        .finally(()=> {
            setLoading(false)
            navigate("/hemocentros")
        })

    }

    const onFinishFailed = () => {
        info2()
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
                form={form}
                style={{ padding: '15px' }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                className={Styles.form}
            >
                <fieldset className={Styles.containerForm}>

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
                            <MaskedInput disabled={true} mask="99999-999" className={Styles.input} placeholder="Informe o cep" style={{ borderRadius: '10px', border: '1px solid black', width: '90%', color:'rgba(0, 0, 0, 0.25)', background:'#f5f5f5', cursor:'not-allowed' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Endereço</p>}
                            name="endereco"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo endereço é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite seu endereço' disabled={true} className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Bairro</p>}
                            name="bairro"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo bairro é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite o bairro' disabled={true} className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
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
                            <Input placeholder='Digite o estado' disabled={true} className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Cidade</p>}
                            name="cidade"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo cidade é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite a cidade' disabled={true} className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} />
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Número</p>}
                            name="numero"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo número é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <Input placeholder='Digite o número' disabled={true} className={Styles.input} style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }} />
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
                            <DatePicker locale={locale} style={{ border: '1px solid black', borderRadius: '10px', width: '90%' }} format={'DD/MM/YYYY'} placeholder="Escolha uma data"/>
                        </Form.Item>

                        <Form.Item
                            label={<p style={{ color: 'white', marginBottom: '0' }}>Horario</p>}
                            name="horario"
                            style={{ width: '50%' }}
                            rules={[{ required: true, message: 'O campo horario é obrigatório' }]}
                            labelCol={{ span: 24 }}
                            wrapperCol={{ span: 24 }}
                        >
                            <TimePicker style={{ border: '1px solid black', borderRadius: '10px', width: '100%' }} placeholder="Escolha um horário" format={'HH:mm'} locale={localeTimePicker} />
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