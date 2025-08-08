import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice.js';
import productSliceReducer from './Slices/ProductSlice.js'
import razorpaySliceReducer from './Slices/RazorpaySlice';



const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        product: productSliceReducer,
        razorpay: razorpaySliceReducer,
    },
    devTools: true

})

export default store;