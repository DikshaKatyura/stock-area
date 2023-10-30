import styles from './Home.module.css';
import data from '../data/warehouse.json';
import WarehouseList from '../components/WarehouseList';
import FilterOptions from '../components/FilterOptions';

const Home = () =>{
    return(
        <>
        <FilterOptions />
        <div className={styles['warehouse-list']}>
        {data.map(warehouse =><WarehouseList key={warehouse.id} id={warehouse.id} name={warehouse.name} city={warehouse.city} type={warehouse.type}/>)}
        </div>
        </>
    )
}

export default Home;