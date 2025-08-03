import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"

const initialState = {
    productData : []
}

export const getAllProducts = createAsyncThunk("/product/get", async () => {

    try{
        const response = axiosInstance.get("/products");
        toast.promise(response, {
            loading: "Loadin products",
            success: "Products loaded Successfully",
            error: "Failed to load products"
        });

        return (await response).data.products;

    }catch(error){
        toast.error(error?.response?.data?.massages)
    }


})



const productSlice = createSlice({

    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            if(action.payload){
                state.productData = [...action.payload];
            }
        })


    }
})

export default productSlice.reducer