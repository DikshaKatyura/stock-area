import { configureStore} from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import dataReducer from './dataSlice';
const store  = configureStore({
    reducer:{
        filter : filterReducer,
        data : dataReducer
    }
})

export default store;