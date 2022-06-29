import Style from './Home.module.css'
import Logo from '../../../public/Assets/img/logo.png'
import { GiWaterDrop } from 'react-icons/gi'
import { Button } from 'antd'
import { BsCalendar3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Sider from '../../../public/components/Sider/Sider'

const Home = () => {

     const navigate = useNavigate();

    return (
        <section className={Style.container}>
            <div className={Style.logo}>
                <img src={Logo} width={700} height={230} />
            </div>
            <Sider/>
            <div className={Style.iconArea}>
                <GiWaterDrop className={Style.icone} style={{marginBottom:'5px'}}/>
                <GiWaterDrop className={Style.icone2} style={{marginBottom:'15px'}}/>
            </div>

            <div>
                <spam>Doação de Sangue</spam>
                <p>Conheça todos os detalhes que envolvam doação de sangue.</p>
                <Button type='primary' className={Style.button} style={{ borderColor: '#AF0107' }} onClick={()=> navigate('/home/saiba-mais')}>Saiba mais</Button>
            </div>


            <BsCalendar3 className={Style.calendario} style={{marginBottom:'15px'}}/>
            <div>
                <spam>Agende sua Doação</spam>
                <p>Atendimento ágil e eficaz para os doadores de sangue, com hora marcada.</p>
                <Button type='primary' className={Style.button} style={{ borderColor: '#AF0107' }} onClick={()=> navigate('/agendamento')}>Saiba mais</Button>
            </div>

            <div className={Style.groupGotas}>
                <GiWaterDrop className={Style.gotas} style={{marginBottom:'15px'}}/>
                <GiWaterDrop className={Style.gotas} style={{marginBottom:'15px'}}/>
                <GiWaterDrop className={Style.gotas} style={{marginBottom:'15px'}}/>
            </div>
            <div>
                <spam>Etapas da Doação</spam>
                <p>Conheça todas as Etapas da Doação de Sangue no Hemobanco.</p>
                <Button type='primary' className={Style.button} style={{ borderColor: '#AF0107' }} onClick={()=> navigate('/home/etapas')}>Saiba mais</Button>
            </div>
            <img src={Logo} className={Style.img2}></img>
        </section>
    )
}

export default Home