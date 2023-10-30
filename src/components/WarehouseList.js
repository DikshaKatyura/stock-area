import {Link} from 'react-router-dom';
import Button from '../UI/Button';
import styles from './WarehouseList.module.css';
const WarehouseList = ({id,name,city,type}) =>{

    return(
        <div className={styles.list} key={id}>
            <h3>WAREHOUSE</h3>
        <div className={styles.items}>
            <h4>Name : </h4>
            <p>{name}</p>
        </div>
        <div className={styles.items}>
        <h4>Type : </h4>
            <p>{type}</p>
        </div>
        <div className={styles.items}>
        <h4>City : </h4>
            <p>{city}</p>
        </div>
       <Link to={`${id}`} relative='path'><Button>Show Details</Button></Link>
        </div>
    )
}

export default WarehouseList;