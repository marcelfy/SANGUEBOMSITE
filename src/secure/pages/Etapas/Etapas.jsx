import Styles from './Etapas.module.css'
import Logo from '../../../public/Assets/img/logo.png'
import { GiWaterDrop } from 'react-icons/gi'
import imgCadastro from '../../../public/Assets/img/imgCadastro.jpeg'
import imgTriagem from '../../../public/Assets/img/imgTriagem.jpeg'
import imgVoto from '../../../public/Assets/img/imgVotoDeAutoExclusao.jpeg'
import imgColetaDeSangue from '../../../public/Assets/img/imgColetaDeSangue.jpeg'
import imgLanche from '../../../public/Assets/img/imgLanche.jpeg'
import imgSangueDoado from '../../../public/Assets/img/imgSangueDoado.jpeg'
import {Button} from 'antd'
import { useNavigate } from 'react-router-dom'

const Etapas = () => {

    const navigate = useNavigate()

    return (
        <>
        <div className={Styles.imgArea}>
            <img src={Logo} className={Styles.img} />
            </div>

            <div className={Styles.container}>
                <div className={Styles.groupGotas}>
                    <GiWaterDrop className={Styles.gotas} style={{marginBottom:'15px'}}/>
                    <GiWaterDrop className={Styles.gotas} style={{marginBottom:'15px'}}/>
                    <GiWaterDrop className={Styles.gotas} style={{marginBottom:'15px'}}/>
                </div>
                <div>
                    <spam>Etapas da Doação</spam>
                    <p>Conheça todas as Etapas da Doação de Sangue no Hemobanco.</p>
                </div>
            </div>

        <div className={Styles.bloco}>
            <section className={Styles.etapas}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={imgCadastro} className={Styles.icone}/>
                </div>
                <div>
                    <p className={Styles.numero}>1</p>
                    <div className={Styles.info}>
                        <spam>Cadastro:</spam>
                    </div>
                        <div className={Styles.topicos}>
                            <p>A atendente consultará se o doador está liberado ou impedido à doação e solicitará alguns dados pessoais.</p>
                            <p>É indispensável a apresentação de um documento oficial com foto (RG, Carteiria de Motorista, Carteira Profissional, Passaporte etc.).</p>
                        </div>
                    </div>
                </section>

                <section className={Styles.etapas}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={imgTriagem} className={Styles.icone}/>
                </div>
                <div>
                    <p className={Styles.numero}>2</p>
                    <div className={Styles.info}>
                        <spam>Triagem:</spam>
                    </div>
                        <div className={Styles.topicos}>
                            <p>Abrange a entrevista confidencial e aferição da pressão arterial, pulso, temperatura, peso, altura e dosagem de hemoglobina (através do equipamento NBM 200, sem a necessidade de punção digital).</p>
                            <p>É o processo mais importante na manutenção da qualidade transfusional, pois é a etapa em que define se a doação trará risco para o doador ou para o receptor.</p>
                            <p>A honestidade do doador é primordial!</p>
                            <p>Atenção: mesmo sem apresentar sintomas, você pode portar algum patógeno. Esta situação é chamada de Janela Imunológica.</p>
                        </div>
                    </div>
                </section>

                <section className={Styles.etapas}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={imgVoto} className={Styles.icone}/>
                </div>
                <div>
                    <p className={Styles.numero}>3</p>
                    <div className={Styles.info}>
                        <spam>Voto de Auto-exclusão:</spam>
                    </div>
                        <div className={Styles.topicos}>
                            <p>É a oportunidade final para o doador avaliar se realmente seu sangue pode ser utilizado. Se há riscos ou dúvidas, o doador deve responder que o seu sangue NÃO pode ser utilizado para transfusão. Esta informação, somente será vinculada a doação na etapa de fracionamento, evitando assim, qualquer exposição do doador aos seus acompanhantes ou funcionários.</p>
                        </div>
                    </div>
                </section>
                
                <section className={Styles.etapas}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={imgColetaDeSangue} className={Styles.icone}/>
                </div>    
                <div>
                    <p className={Styles.numero}>4</p>
                    <div className={Styles.info}>
                        <spam>Coleta de sangue:</spam>
                    </div>
                        <div className={Styles.topicos}>
                           <p>O sangue é coletado utilizando-se material totalmente descartável, estéril e de uso único. O procedimento é realizado por profissionais altamente capacitados e com segurança. A doação dura cerca de 10 minutos. Serão coletados em torno de 450 ml de sangue e amostras para realização de exames laboratoriais obrigatórios.</p>
                        </div>
                    </div>
                </section>

                <section className={Styles.etapas}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img src={imgLanche} className={Styles.icone}/>
                </div>
                <div>
                    <p className={Styles.numero}>5</p>
                    <div className={Styles.info}>
                        <spam>Lanche:</spam>
                    </div>
                        <div className={Styles.topicos}>
                           <p>Após a doação, o doador será encaminhado para um lanche e deve permanecer ainda no banco de sangue por aproximadamente 15 minutos, indo embora somente se estiver se sentindo bem.</p>
                        </div>
                    </div>
                </section>

                <section className={Styles.etapas}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <img src={imgSangueDoado} className={Styles.icone} style={{alignItems:'center'}}/>
                    </div>
                <div>
                    <p className={Styles.numero}>6</p>
                    <div className={Styles.info}>
                        <spam>O que acontece com o sangue doado?:</spam>
                    </div>
                        <div className={Styles.topicos}>
                          <p>Após a doação o sangue será fracionado em diversos componentes como: Hemácias, Plasma, Plaquetas ou Crioprecipitado.</p>
                          <p>As amostras de sangue coletadas serão encaminhadas para a realização de testes imuno-hematológicos (Classificação ABO/Rh, Pesquisa e Identificação de Anticorpos Irregulares, Teste de Solubilidade para Hemoglobina S) e Sorológicos (HIV, Hepatites B e C, Chagas, Sífilis, HTLV I e II).</p>
                          <p>O sangue que apresentar resultados sorológicos negativos será devidamente etiquetado e liberado para distribuição e transfusão. Se houver alteração de alguns dos testes ou inadequação da amostra, o sangue coletado não poderá ser utilizado e o doador será convocado para retornar ao Hemobanco para orientações e repetição dos testes.</p>
                        </div>
                    </div>
                </section>
                <Button type='primary' className={Styles.button} style={{ borderColor: '#AF0107' }} onClick={()=> navigate('/home')}>Voltar</Button>
            </div>
        </>
    )
}

export default Etapas