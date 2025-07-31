import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import { login } from "../Redux/Slices/AuthSlice";



 function Signup() {

        const dispatch = useDispatch();
        const navigate = useNavigate();

  
    const [loginData, setLoginData] = useState({
   
        email: "",
        password: "",
      
    });

    function handaleUserInput(e) {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value

        });
            
    }


  
async function onLogin(event) {
        event.preventDefault();
        if(!loginData.email || !loginData.password) {
            toast.error("Please fill all the details");
            return;
        }

        if(!loginData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            toast.error("Invalid email id");
            return;
        }


  

        // dispatch create account action
        const response = await dispatch(login(loginData));
        if(response?.payload?.success)
            navigate("/");

        setLoginData({
            email: "",
            password: "",

        });
        setPreviewImage("");


    }
    

    return (
        <HomeLayout>

            <div className="flex items-center justify-center h-screen  bg-[#1A2238]">

                <form  onSubmit={onLogin} noValidate className="flex flex-col items-center justify-center rounded-lg gap-3 p-4 text-white shadow-xl bg-[#1A2238] w-96 ">

                    <h1 className="text-3xl font-bold text-center">
                       Login Here
                    </h1>

                
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="email" className="text-sm font-semibold">Email</label>
                        <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={handaleUserInput}
                            value={loginData.email}
                        />

                    </div>

                    <div className="flex flex-col gap-2 w-full">

                        <label htmlFor="password" className="text-sm font-semibold">Password</label>
                        <input
                            type="password"
                            required
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={handaleUserInput}
                            value={loginData.password}
                        />

                    </div>

                    <button type="submit" className=" w-full p-2 rounded-lg mt-2 cursor-pointer font-semibold text-white bg-yellow-500  hover:bg-yellow-600 transition-colors duration-300" >

                        Login
                    </button>

                    <p className="text-center">

                        Don't have an account ?  <Link to="/signup" className="text-yellow-500 link font-semibold hover:text-yellow-600 transition-colors duration-300">Signup</Link>


                    </p>


                </form>

            </div>

        </HomeLayout>


    );
}

export default Signup;