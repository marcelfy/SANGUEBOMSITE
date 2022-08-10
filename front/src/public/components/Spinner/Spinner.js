import Styles from './Spinner.module.css'

const Spinner = (props) => {  
  return (
    <>
      {props.loading ?
      <div className={Styles.viewPortOverlay}>
        <div className={Styles.spinner} >
        </div> </div> : null
      }
    </>
  )
}

export default Spinner;
