import {useParams} from 'react-router-dom';
import data from '../data/warehouse.json';
import WarehouseDetails from '../components/WarehouseDetails';

const WarehouseDetailsPage = () =>{
    const params = useParams();

    const warehouse = data.filter(item => item.id === +params.id);

    return(
        <WarehouseDetails  warehouse ={warehouse[0]}/>
    )
}

export default WarehouseDetailsPage;