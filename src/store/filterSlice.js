import { createSlice } from '@reduxjs/toolkit';
import warehouses from '../data/warehouse';

const initialState = {
    warehouses : warehouses,
    filteredWarehouses : [],
    loading : true,
    input : '',
    searchedNames : [],
}

const filterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers : {
        setFilteredWarehouseToEmpty(state){
            state.filteredWarehouses = [];
        },
        filterById(state,action){
            state.filteredWarehouses = state.warehouses.filter(item => item.id === action.payload);
        },
        setLoading(state,action){
            state.loading = action.payload;
        },
        updateData(state,action){
            const id = action.payload.id;
            const data = action.payload.data;
            let updatedWarehouses;
           state.warehouses.map(item => {
                if(item.id === id){
                    updatedWarehouses = {...item,
                        name:  data.name,
                        city : data.city,
                        cluster : data.cluster,
                       space_available :  data.space_available,
                      is_live :  data.is_live,
                        is_registered : data.is_registered
                    }
                }
                return updatedWarehouses;
            });
            const index = state.warehouses.findIndex(item => item.id === id);
            state.warehouses[index] = {...updatedWarehouses}
            state.searchedNames=[];
        },
        searchInput(state,action){
            state.input = action.payload;
            let i =[];
            i = state.warehouses.filter(item => item.name.toLocaleLowerCase().includes(state.input))
            if(i.length === 0){
                state.searchedNames = [...state.warehouses];
            }else{
                state.searchedNames = [...i];
            }
            state.filteredWarehouses = []
        },
        filterByCity(state,action){
            const text = action.payload;
            state.filteredWarehouses = state.warehouses.filter(item => item.city === text);
            state.searchedNames = []
        },
        filterByCluster(state,action){
            const text = action.payload;
            state.filteredWarehouses = state.warehouses.filter(item => item.cluster === text);
            state.searchedNames = []

        },
        filterBySpace(state,action){
            const text = action.payload;
            let cluster =[];
            state.filteredWarehouses = state.warehouses.filter(item => {
                if(text === "0-5,00,000"){
                   if(item.space_available <= 500000){
                    return cluster.push(item);
                   }
                }else if(text === "5,00,000 - 10,00,000"){
                    if(item.space_available > 500000){
                        return cluster.push(item);
                       }
                }
            });
            state.searchedNames = []
        }
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;