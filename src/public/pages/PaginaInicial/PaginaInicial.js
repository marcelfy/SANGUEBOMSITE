import style from './PaginaInicial.module.css'
import Logo from '../../../public/Assets/img/logo.png'
import {FaExclamation, } from 'react-icons/fa'
import {MdBloodtype} from 'react-icons/md'
import {GrEmptyCircle} from 'react-icons/gr'
import DoacaoService from '../../../service/DoacaoService.ts'
import React, { useEffect, useState } from 'react';

const Home = () => {

    const [doacao, setDoacao] = useState()

    useEffect(()=>{
        DoacaoService.get().then((resp)=>{
            setDoacao(resp)
        })
    },[])

    return(
        <section className={style.home_container}>
            <img src={Logo} className={style.img}></img>
            <p className={style.title}>DOAÇÕES REALIZADAS ATRAVÉS DO <b>SANGUE BOM</b></p>
            
                <div className={style.numDoacoes}>
                    <b>SANGUE</b>
                    <b style={{color:'black'}}>{doacao?.length}</b>
                </div>
            <div className={style.infosangue}>
                <MdBloodtype className={style.icon}/>
                {/* <GrEmptyCircle className={style.icon2}/> */}

            </div>

            <b style={{fontSize:'17px'}}>Quem somos?</b>

            <p> Somos uma plataforma Online, que disponibiliza ao público um sistema web inovador que permite agendar doações de sangue e medula óssea, voltado para auxiliar os Hemocentros. Além das doações, o programa terá em destaque os Hemocentros que mais precisam de doaçãos e conecta-los aos usuários, para que as necessidades dos mesmos sejam sanadas o mais rápido possível, assim alcançando um maior número de pessoas em menos tempo. Contamos com a ajuda de todos para essa corrente. </p>
           
            <FaExclamation className={style.exclamation}/>

            <p>A queda no número de doações de sangue e medula óssea em Campo Grande reduz o estoque do Hemosul, que já sofre com a escassez de doadores, para estimular e incentivar a adesão de novas pessoas será criado um sistema que possibilita o cadastro de novos doadores e estimule os já existentes. 
Enviaremos um lembrete para os usuários cadastrados lembrando-os quando poderão doar novamente, por e-mail e via aplicativos de mensagens informando locais de coleta. O usuário terá acesso ao histórico de doações, gerando um certificado virtual com o tipo e número de doação referente. 
            </p>

            <img src={Logo} className={style.img2}></img>
        </section>
    )
}

export default Home