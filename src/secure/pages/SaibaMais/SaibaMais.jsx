import Style from './SaibaMais.module.css'
import { GiWaterDrop } from 'react-icons/gi'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const SaibaMais = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className={Style.container1}>
                <div className={Style.iconArea}>
                    <GiWaterDrop className={Style.icone} style={{ marginBottom: '5px' }} />
                    <GiWaterDrop className={Style.icone2} style={{ marginBottom: '15px' }} />
                </div>

                <div>
                    <spam>Doação de Sangue</spam>
                    <p style={{marginLeft:'0', marginBottom:'7%'}}>Conheça todos os detalhes que envolvam doação de sangue.</p>
                </div>
                <spam style={{marginBottom:'-35px'}}>O QUE É NECESSARIO PARA DOAR?</spam>

            </section>
            <div className={Style.bloco}>
                <p>Requisitos básicos:</p>
                <ul className={Style.lista}>
                    <li>Estar em boas condições gerais de saúde;</li>
                    <li>Estar descansado: mínimo 6h de sono;</li>
                    <li>Ter idade entre 16 e 69 anos. A primeira doação deve ter sido feita até os 60 anos de idade. Menores de 18 anos, clique para ver documentos necessários e formulário de autorização);</li>
                    <li> Pesar mais de 50 kg;</li>
                    <li>Estar alimentado: não deve estar em jejum. Evitar alimentação gordurosa nas 3 horas que antecedem a doação. Aguardar intervalo de 1h após o almoço;</li>
                    <li>Portar documento oficial co m foto emitido por órgão oficial (RG, Carteira de habilitação, Passaporte, Carteira de identidade profissional e Carteira de Trabalho);</li>
                    <li>Respeitar o intervalo mínimo entre as doações;</li>
                    <li>Ter estilo de vida saudável e não ter comportamento de risco.</li>
                </ul>
                <p style={{ fontWeight: 'bold', color: 'black' }}>Intervalo das doações:<br />
                    Homens: 2 meses (4 doações anuais)<br />
                    Mulheres: 3 meses (3 doações anuais)</p>
            </div>

            <spam style={{ color: '#AF0107', fontSize: '2em', justifyContent: 'center', display: 'flex'}}>QUEM NÃO PODE DOAR?</spam>
            <p style={{ fontWeight: 'bold', color: 'black', marginTop: '10px' }}>Listamos abaixo as causas mais comuns de impedimento, lembrando não serem as únicas:</p>
            <p>Impedimentos Definitivos:</p>
            <ul className={Style.lista}>
                <li>Alcoolismo crônico;</li>
                <li>Câncer;</li>
                <li>Diabetes tipo I, diabetes tipo II, insulino dependente ou com problemas vasculares;</li>
                <li>Doenças Cardíacas graves e após cirurgias cardíacas de grande porte;</li>
                <li>Hepatite após os 11 anos de idade;</li>
                <li>Evidência clínica ou laboratorial das seguintes doenças infecciosas transmissíveis pelo sangue: Hepatites B e C, AIDS (vírus HIV), doenças associadas aos vírus HTLV I e II, Doença de Chagas e Sífilis;</li>
                <li>Uso de drogas ilícitas injetáveis;</li>
                <li>Malária (febre quartã – Plasmodium malarie);</li>
                <li>Transplante de órgãos;</li>
                <li>AVC – Acidente Vascular Cerebral;</li>
                <li>Infarto;</li>
                <li>Doença auto-imune.</li>
            </ul>

            <p>Impedimentos temporários:</p>
            <ul className={Style.lista}>
                <li>Resfriados e gripes: se febre aguardar 15 dias após melhora dos sintomas e na ausência de febre apto após 7 dias;</li>
                <li>Alergias: apto 7 dias após o fim do tratamento;</li>
                <li>Diarreia: apto 7 dias após melhora dos sintomas;</li>
                <li>Gravidez;</li>
                <li>Amamentação (se o parto ocorreu a menos de 12 meses);</li>
                <li>90 dias após o parto normal e 180 dias após parto cesariano;</li>
                <li>Ingestão de bebida alcoólica nas 12 horas que antecedem a doação;</li>
                <li>Tatuagem, piercing ou maquiagem definitiva: impedem a doação de 6 a 12 meses;</li>
                <li>Piercing em cavidade oral e/ou genital impedem a doação por 12 meses após sua retirada;</li>
                <li>IST’s (Infecções sexualmente transmissíveis): apto 12 meses após a cura;</li>
                <li>Quem esteve em regiões endêmicas de Malária, aguardar 12 meses;</li>
                <li>Uso de drogas;</li>
                <li>Cirurgias;</li>
                <li>Vacinas;</li>
                <li>Hipertensão;</li>
                <li>Medicamentos;</li>
                <li>Procedimentos odontológicos;</li>
                <li>Procedimentos endoscópicos: 6 meses.</li>
                <li>Outras doenças.</li>
            </ul>
            <p className={Style.lista}>*O candidato à doação deverá passar por avaliação por profissional treinado e qualificado.
                Seja consciente: sua doação salva vidas! Sua sinceridade muito mais!</p>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Button type='primary' className={Style.button} style={{ borderColor: '#AF0107' }} onClick={()=> navigate('/home')}>Voltar</Button>
            </div>
        </>
    )
}

export default SaibaMais