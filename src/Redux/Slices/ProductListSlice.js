import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState = {
    lists: []
}


export const getProductLists = createAsyncThunk("/product/list/get", async (cid) => {
    try {
        const response = axiosInstance.get(`/products/${cid}`);
        toast.promise(response, {
            loading: "Fetching product lists",
            success: "Products fetched successfully",
            error: "Failed to load the productslists"
        });
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const addProductList = createAsyncThunk("/product/list/add", async (data) => {
    try {
        const formData = new FormData();
        formData.append("productlist", data.productlist);
        formData.append("title", data.title);
        formData.append("description", data.description);

        const response = axiosInstance.post(`/products/${data.id}`, formData);
        toast.promise(response, {
            loading: "adding products list",
            success: "product list successfully",
            error: "Failed to add the productlists"
        });
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

export const deleteProductList = createAsyncThunk("/product/list/delete", async (data) => {
    try {

        const response = axiosInstance.delete(`/products?productId=${data.productId}&listId=${data.listId}`);
        toast.promise(response, {
            loading: "deleting product list",
            success: "List deleted successfully",
            error: "Failed to delete the lists"
        });
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});


const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductLists.fulfilled, (state, action) => {
            console.log(action);
            state.lists = action?.payload?.lists;
        })
        .addCase(addProductList.fulfilled, (state, action) => {
            console.log(action);
            state.lists = action?.payload?.list?.lists;
        })
    }
});

export default listSlice.reducer;