import { createSlice } from '@reduxjs/toolkit';
import warehouses from '../data/warehouse';

let cities = new Set([]);
let clusters = new Set([]);
let space = new Set([]);
const findCities = ()=>{
        return warehouses.map(item => cities.add(item.city)); 
}
const findClusters = ()=>{
    return warehouses.map(item => clusters.add(item.cluster)); 
}
const findAvailableSpace = ()=>{
    return warehouses.map(item => {
        if(item.space_available <= 500000){
           space.add('0-5,00,000');
        }else{
           space.add('5,00,000 - 10,00,000');
        }
        return space;
    }); 
}
findCities();
findClusters();
findAvailableSpace();

const initialState = {
    warehouses : warehouses,
    cities :[...cities],
    clusters : [...clusters],
    spaces : [...space],
    showModal : false
}

const dataSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {
        setShowModal(state){
            state.showModal = !state.showModal;
        }
    }
})

export const dataActions = dataSlice.actions;
export default dataSlice.reducer;