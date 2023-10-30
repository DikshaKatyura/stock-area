import styles from './Inputs.module.css';

const Inputs = (props) =>{
return(
    <div className={`${styles.inputs} ${props.details.type === 'radio' && styles.radios}`} >
    <label htmlFor={props.details.id}>{props.details.id}:</label>
    <input {...props.details}/>
    </div>
)
}

export default Inputs;