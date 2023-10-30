import { configureStore} from '@reduxjs/toolkit';
// import searchReducer from './searchSlice';
// import filterReducer from './filterSlice';

const store  = configureStore({
    reducer:{
        // search : searchReducer,
        // filter : filterReducer
    }
})

export default store;