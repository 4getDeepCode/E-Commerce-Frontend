import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice.js';
import productSliceReducer from './Slices/ProductSlice.js'



const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        product: productSliceReducer
    },
    devTools: true

})

export default store;