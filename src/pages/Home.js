import { useSelector} from 'react-redux';
import styles from './Home.module.css';
import WarehouseList from '../components/WarehouseList';
import FilterOptions from '../components/FilterOptions';


const Home = () =>{
    const data = useSelector(state => state.filter.warehouses);
    const searchedInput = useSelector(state =>state.filter.searchedNames);
    const filteredWarehouses = useSelector(state =>state.filter.filteredWarehouses);

    return(
        <div className={styles.container}> 
        <FilterOptions />
        <div className={styles['warehouse-list']}>
        {searchedInput.length === 0 && !filteredWarehouses.length  && data.map(warehouse =><WarehouseList key={warehouse.id} id={warehouse.id} name={warehouse.name} city={warehouse.city} type={warehouse.type}/>)}
        {searchedInput.length >= 0  && searchedInput.map(warehouse => <WarehouseList key={warehouse.id} id={warehouse.id} name={warehouse.name} city={warehouse.city} type={warehouse.type}/>)}
        {filteredWarehouses.length > 0 && searchedInput.length === 0 && filteredWarehouses.map(warehouse =><WarehouseList key={warehouse.id} id={warehouse.id} name={warehouse.name} city={warehouse.city} type={warehouse.type}/>)}
        </div>
        </div>
    )
}

export default Home;