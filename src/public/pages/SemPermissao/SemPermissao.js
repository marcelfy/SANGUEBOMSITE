import Styles from './SemPermissao.module.css'
import { Result , Button} from 'antd'

function SemPermissao() {
  return (
    
      <Result
        style={{height:'auto'}}
        status="403"
        title="403"
        subTitle="Sem permissão para acessar essa página"
        extra={<Button type="primary" ><a href='/'>Voltar ao inicio</a></Button>}
      />
    
  )
}

export default SemPermissao