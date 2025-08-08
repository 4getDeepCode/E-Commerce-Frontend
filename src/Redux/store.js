import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './Slices/AuthSlice.js';
import productSliceReducer from './Slices/ProductSlice.js'
import razorpaySliceReducer from './Slices/RazorpaySlice';
import listSliceReducer from './Slices/ProductListSlice.js'




const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        product: productSliceReducer,
        razorpay: razorpaySliceReducer,
        list : listSliceReducer
     
    },
    devTools: true

})

export default store;