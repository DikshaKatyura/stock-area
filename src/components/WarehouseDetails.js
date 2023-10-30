import {Link} from 'react-router-dom';
import Button from '../UI/Button';

import styles from './WarehouseList.module.css';
const WarehouseDetails = ({id,warehouse}) =>{
  
    return(
        <div className={styles.container}>
            <div className={styles.list} key={id}>
        <h3>WAREHOUSE DETAILS</h3>
    <div className={styles.items}>
        <h4>Name : </h4>
        <p>{warehouse.name}</p>
    </div>
    <div className={styles.items}>
    <h4>Type : </h4>
        <p>{warehouse.type}</p>
    </div>
    <div className={styles.items}>
    <h4>City : </h4>
        <p>{warehouse.city}</p>
    </div>
    <div className={styles.items}>
    <h4>Cluster : </h4>
        <p>{warehouse.cluster}</p>
    </div>
    <div className={styles.items}>
    <h4>Code : </h4>
        <p>{warehouse.code}</p>
    </div>
    <div className={styles.items}>
    <h4>Status : </h4>
        {warehouse.is_live && <p className={styles.active}>Active</p>}
        {!warehouse.is_live && <p className={styles.inactive}>Not Active</p>}
    </div>
    <div className={styles.items}>
    <h4>Registration : </h4>
    {warehouse.is_registered && <p className={styles.active}>Registered</p>}
    {!warehouse.is_registered && <p className={styles.inactive}>Not Registered</p>}
    </div>
    <div className={styles.items}>
    <h4>Available Space : </h4>
        <p>{warehouse.space_available} sq/ft</p>
    </div>
    <div className={styles.btns}>
   <Link to={'edit'} relative='path'><Button>Edit</Button></Link>
   <Link to={`..`} relative='path'><Button style={{backgroundColor:'red'}}>Cancel</Button></Link>
    </div>

    </div>
        </div>
    )
}

export default WarehouseDetails;