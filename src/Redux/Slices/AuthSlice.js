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

export const login = createAsyncThunk ("/auth/login", async (data) =>{
    try{
        const res = axiosInstant.post("user/login", data)
        toast.promise(res, {
            loading: "wait! authantication  process",
            success: (data) => {
                return data?.data?.massage;
            },
            error: "failed to login"
        });

        return (await res).data;

    }catch(error){
        toast.error(error?.response?.data?.massage || "Something went wrong");
    
    }
});


export const logout = createAsyncThunk ("/auth/logout", async (data) =>{
    try{
        const res = axiosInstant.post("user/logout")
        toast.promise(res, {
            loading: "wait! logout in progress",
            success: (data) => {
                return data?.data?.massage;
            },
            error: "failed to log out"
        });

        return (await res).data;

    }catch(error){
        toast.error(error?.response?.data?.massage || "Something went wrong");
    
    }
});



const authSlice = createSlice({

    name: 'auth',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(login.fulfilled, (state, action) => {
            localStorage.setItem("data", JSON.stringify(action?.payload.user));
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data =  action?.payload.user;
            state.role =  action?.payload?.user?.role

        })

        .addCase(logout.fulfilled, (state, action) => { 
                localStorage.clear();
                state.data = {}; 
                state.isLoggedIn = false;
                state.role = "";
        } )
    }
});

//export const {} = authSlice.actions;
export default authSlice.reducer;