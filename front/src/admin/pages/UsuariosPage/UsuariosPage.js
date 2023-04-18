import React, { useEffect, useState } from 'react'
import UsuarioService from '../../../service/UsuarioService.ts'
import Styles from './UsuariosPage.module.css'
import Logo from '../../../public/Assets/img/logo.png'
import { Checkbox, message, Table, notification } from 'antd'
import PerfilService from '../../../service/PerfilService.ts'
import { useNavigate } from 'react-router-dom'

const UsuariosPage = () => {

    const [usuarios, setUsuarios] = useState()
    const [perfil, setPerfil] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        UsuarioService.get().then((resp) => {
            setUsuarios(resp)
        })
        .catch((err) => {
            notification.error({
                message: 'Necessário realizar o login',
                description:
                    <p>Para ter acesso a essa funcionalidade é necessário realizar o login <a href='/login' style={{ fontWeight: 'bold' }}>aqui</a></p>,
                style: {
                    width: 400,
                    height: 100
                },
                duration: 5
            })

            setTimeout(() => {
                navigate('/login')
            }, 5000);
        })


        PerfilService.get().then((resp)=>{
            setPerfil(resp)
        })
    }, [])

    function buscarUsuarios(){
        UsuarioService.get().then((resp) => {
            setUsuarios(resp)
        })
    }

    function fixCpf(cpf) {
        cpf = cpf.replace(/\D/g, "");

        cpf = cpf.substr(0, 3) + "." + cpf.substr(3, 3) + "." + "***" + "-" + cpf.substr(9, 2);

        return cpf;
    }

    function alterarPerfil(usuarioID, perfilID){
        let usuario = usuarios.find(u => u.usuarioID === usuarioID)
        usuario.perfilID = perfilID
        UsuarioService.put(usuario).then((resp)=>{
            buscarUsuarios()
            message.success("Usuario atualizado com sucesso")
        })
    }

    const colunas = [
        {
            title: 'Nome',
            dataIndex: '',
            key: '',
            render: (record) => (
                <p style={{ marginBottom: '0' }}>{record?.nome}</p>
            ),
        },
        {
            title: 'Cpf',
            dataIndex: '',
            key: '',
            render: (record) => (
                <p style={{ marginBottom: '0' }}>{fixCpf(record?.cpf)}</p>
            )
        },
        {
            title: 'Telefone',
            dataIndex: 'telefone',
            key: ''
        },
        {
            title: 'Perfil',
            dataIndex: '',
            key: '',
            align: 'center',
            width: '250',
            render: (record) => {  
                 return perfil?.map((p, index)=>{
                    return <div key={index}><Checkbox value={p.perfilID} checked={p.perfilID === record.perfilID? true: false} onChange={(e) => alterarPerfil(record.usuarioID, e.target.value)}/> <label >{p.nome}</label></div>
                })
                
            }
        },
    ]

    return (
        <div className={Styles.container}>
            <img src={Logo} width={700} height={220} />
            <h2><b>Usuários</b></h2>
            <Table dataSource={usuarios} columns={colunas} />
        </div>
    )
}

export default UsuariosPage