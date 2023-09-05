import React from 'react'
import Styles from './EstoqueSangueComponent.module.css'
import { Progress } from 'antd'

const EstoqueSangueComponent = (props) => {
    return (
        <div>
            <h3 className={Styles.title}>{props?.tipoSangue}</h3>
            <Progress type='circle' percent={props?.percentual} status="active" strokeColor={props?.percentual === 100? 'red' : 'blue'} 
            format={()=> props?.percentual === 100? 'Cheio' :  props?.percentual.toFixed(2) + '%'}/>
        </div>
    )
}

export default EstoqueSangueComponent