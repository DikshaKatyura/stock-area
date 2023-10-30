import {Link} from 'react-router-dom';
import Button from '../UI/Button';
import Inputs from "../UI/Inputs";
import styles from "./WarehouseForm.module.css";

const WarehouseForm = () =>{
return(
    <div className={styles['form-container']}>
    <h3>Edit Warehouse Details</h3>
    <Inputs details={{
        type:'text',
        id: 'name',
    }}/>
    <Inputs details={{
        type:'text',
        id: 'type',
    }}/>
    <Inputs details={{
        type:'text',
        id: 'city',
    }}/>
    <Inputs details={{
        type:'text',
        id: 'code',
    }}/>
       <Inputs details={{
        type:'text',
        id: 'cluster',
    }}/>
       <Inputs details={{
        type:'number',
        id: 'space availability',
    }}/>
    <div className={styles['radio-inputs']}>
        <span>Status: </span>
        <Inputs details={{
        type:'radio',
        id: 'active',
        name:'status',
        
    }}/>
     <Inputs details={{
        type:'radio',
        id: 'inactive',
        name:'status',
        
    }}/>
    </div>
    <div className={styles['radio-inputs']}>
        <span>Registration: </span>
       <Inputs details={{
        type:'radio',
        id: 'registered',
        name:'registration'
    }}/>
    <Inputs details={{
        type:'radio',
        id: 'Not registered',
        name:'registration'
    }}/>
        
    </div>
    <div className={styles.btns}>
   <Link to={'/'} relative='path'><Button>Save</Button></Link>
   <Link to={`..`} relative='path'><Button style={{backgroundColor:'red'}}>Cancel</Button></Link>
    </div>
      
    </div>
    
)
}

export default WarehouseForm;