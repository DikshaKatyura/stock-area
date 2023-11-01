import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom';
import WarehouseDetails from '../components/WarehouseDetails';
import { useLayoutEffect } from 'react';
import { filterActions } from '../store/filterSlice';

const WarehouseDetailsPage = () =>{
    const params = useParams();
    const dispatch = useDispatch();
    const warehouse = useSelector(state => state.filter.filteredWarehouses);
    const loading = useSelector(state => state.filter.loading);
console.log(params.id, loading);

    useLayoutEffect(() => {
        dispatch(filterActions.filterById(+params.id));
        dispatch(filterActions.setLoading(false));
    },[params,dispatch])

    return(
        <>
        {!loading && <WarehouseDetails  warehouse ={warehouse[0]}/>}
        {loading && <p>loading...</p>}
        </>
    )
}

export default WarehouseDetailsPage;