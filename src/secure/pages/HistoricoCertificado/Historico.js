import Styles from './Historico.module.css'
import { Button, Space, Table, notification } from 'antd';
import Logo from '../../../public/Assets/img/logo.png'
import { AiOutlineHistory } from 'react-icons/ai'
import Certificado from '../../../public/Assets/img/certificado.png'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import AgendamentoService from '../../../service/AgendamentoService.ts';
import moment from 'moment';

const HistoricoCertificado = () => {

    const navigate = useNavigate()

    const usuario = JSON.parse(sessionStorage.getItem("usuarioLogado"))

    const [data, setData] = useState();

    useEffect(() => {
        AgendamentoService.getByUsuarioId(usuario?.usuarioID).then((resp) => {
            setData(resp.filter(a => a.situacao != "Aberto"))
        })
            .catch((err) => {
                notification.error({
                    message: 'Necessário realizar o login',
                    description:
                        <p>{err.response.data?.message} <br /><a href='/login' style={{ fontWeight: 'bold' }}>Fazer login</a></p>,
                    style: {
                        height: err.response.status == 500 ? 120 : 100
                    },
                    duration: 5
                })
                sessionStorage.clear()
                setTimeout(() => {
                    navigate('/login')
                }, 5000);
            })

    }, [])

    const columns = [
        {
            title: 'Data de Doação',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (record) => (
                <Space size="middle" className={Styles.centralizar}>
                    <>{moment(record).format("DD/MM/YYYY")}</>
                </Space>
            ),
        },
        {
            title: <p style={{ marginBottom: '0' }} className={Styles.centralizar}>Local</p>,
            key: 'descricao',
            render: (record) => (
                record.Hemocentro.endereco
            )
        },
        {
            title: 'Download',
            dataIndex: 'download',
            key: 'download',
            render: (record) => (
                <Space size="middle" className={Styles.centralizar}>
                    <a>Baixar</a>
                </Space>
            ),

        },
        {
            title: 'Certificado',
            dataIndex: 'certificado',
            key: 'download',
            render: (record) => (
                <Space size="middle" className={Styles.centralizar}>
                    <a>Baixar</a>
                </Space>
            ),

        }
    ]

    return (
        <>
            <div className={Styles.container} style={{ marginTop: '40px' }}>
                <img src={Logo} className={Styles.img} />
                {/* <div className={Styles.container}> */}
                    <div style={{ display: "flex", justifyContent: 'space-between', width: '20%' }}>
                        <AiOutlineHistory className={Styles.icone} />
                        <img src={Certificado} className={Styles.icone} width={110} />
                    </div>
                    <b>Histórico e Certificados</b>
                    <Table columns={columns} dataSource={data} className={Styles.table} />
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button type='primary' className={Styles.button} style={{ borderColor: '#AF0107' }} onClick={() => navigate('/home')}>Voltar</Button>
                    </div>
                    <div className={Styles.imagens}>
                        <img src={Logo} className={Styles.img2}></img>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default HistoricoCertificado