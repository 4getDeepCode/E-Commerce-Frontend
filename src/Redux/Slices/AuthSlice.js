import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axiosInstant from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";


const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

export const createAccount = createAsyncThunk ("/auth/signup", async (data) =>{
    try{
        const res = axiosInstant.post("user/register", data)
        toast.promise(res, {
            loading: "wait! creating your account",
            success: (data) => {
                return data?.data?.massage;
            },
            error: "failed to create account"
        });

        return (await res).data;

    }catch(error){
        toast.error(error?.response?.data?.massage || "Something went wrong");
    
    }
})

const authSlice = createSlice({

    name: 'auth',
    initialState,
    // reducers: {}
});

//export const {} = authSlice.actions;
export default authSlice.reducer;