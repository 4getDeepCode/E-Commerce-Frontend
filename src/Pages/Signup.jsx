import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast";
import { createAccount } from "../Redux/Slices/AuthSlice";



 function Signup() {

        const dispatch = useDispatch();
        const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState("");
    const [signUpData, setSignupData] = useState({
        fullname: "",
        email: "",
        password: "",
        avatar:""
    });

    function handaleUserInput(e) {
        const { name, value } = e.target;
        setSignupData({
            ...signUpData,
            [name]: value

        });
            
    }


    function getImage(event) {
        event.preventDefault();

        const uploadImage = event.target.files[0];

        if(uploadImage){
            setSignupData({
                ...signUpData,
                avatar : uploadImage
            });

            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadImage);
            fileReader.addEventListener("load", function(){
                setPreviewImage(this.result);
            })
        }
    }

async function createNewAccount(event) {
        event.preventDefault();
        if(!signUpData.email || !signUpData.password || !signUpData.fullname || !signUpData.avatar) {
            toast.error("Please fill all the details");
            return;
        }

        // checking name field length
        if(signUpData.fullname.length < 5) {
            toast.error("Name should be atleast of 5 characters")
            return;
        }
        // checking valid email
        if(!signUpData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            toast.error("Invalid email id");
            return;
        }
        // checking password validation
        if(!signUpData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        const formData = new FormData();
        formData.append("fullName", signUpData.fullname);
        formData.append("email", signUpData.email);
        formData.append("password", signUpData.password);
        formData.append("avatar", signUpData.avatar);

        // dispatch create account action
        const response = await dispatch(createAccount(formData));
        if(response?.payload?.success)
            navigate("/");

        setSignupData({
            fullName: "",
            email: "",
            password: "",
            avatar: ""
        });
        setPreviewImage("");


    }
    

    return (
        <HomeLayout>

            <div className="flex items-center justify-center h-screen  bg-[#1A2238]">

                <form  onSubmit={createNewAccount} noValidate className="flex flex-col items-center justify-center rounded-lg gap-3 p-4 text-white shadow-xl bg-[#1A2238] w-96 ">

                    <h1 className="text-3xl font-bold text-center">
                        SignUp Here
                    </h1>

                    <label htmlFor="image_upload" className="cursor-pointer mt-2">
                        {previewImage ? (<img className="w-24 h-24 m-auto rounded-full" src={previewImage} />) : (<BsPersonCircle className="w-24 h-24 rounded-full m-auto" />)}
                    </label>

                    <input

                        onChange={getImage}
                        className="hidden"
                        type="file"
                        id="image_upload"
                        accept=".jpg, .jpeg, .png"
                        name="image_upload"


                    />


                    <div className="flex flex-col gap-2 w-full">

                        <label htmlFor="fullname" className="text-sm font-semibold">Fullname</label>
                        <input
                            type="text"
                            required
                            id="fullname"
                            name="fullname"
                            placeholder="Enter your fullname"
                            className="w-full p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            onChange={handaleUserInput}
                            value={signUpData.fullname}
                        />

                    </div>

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
                            value={signUpData.email}
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
                            value={signUpData.password}
                        />

                    </div>

                    <button type="submit" className=" w-full p-2 rounded-lg mt-2 cursor-pointer font-semibold text-white bg-yellow-500  hover:bg-yellow-600 transition-colors duration-300" >

                        Create Account
                    </button>

                    <p className="text-center">

                        Already have an account ?  <Link to="/login" className="text-yellow-500 link font-semibold hover:text-yellow-600 transition-colors duration-300">Login</Link>


                    </p>


                </form>

            </div>

        </HomeLayout>


    );
}

export default Signup;