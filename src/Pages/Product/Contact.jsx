import { useState } from "react";
import HomeLayout from "../../Layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../../Helpers/regexMatcher";
import axiosInstance from "../../Helpers/axiosInstance";

function Contact() {

    const [userInput, setUserInput] = useState(
        {
            name: "",
            email: "",
            message: ""
        }
    );

    function handleInputChange(e) {
        const { name, value } = e.target;
        console.log(name, value);

        setUserInput({

            ...userInput,
            [name]: value

        });
    }


    async function onFormSubmit(e) {

        e.preventDefault();
        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("all feilds are required");
            return;
        }

        if (!isEmail(userInput.email)) {
            toast.error("enter valid email");
            return;
        }

        try {
            const response = axiosInstance.post("/contact", userInput);
            toast.promise(response, {
                loading: "submitting your message",
                success: "form submited successfully",
                error: "failed to submit the form"

            });

            const contactResponse = await response;
            if (contactResponse?.data?.success) {
                setUserInput(
                    {
                        name: "",
                        email: "",
                        message: ""
                    }

                )
            }


        } catch (error) {

            toast.error("opration failed")
        }


    }


    return (
        <HomeLayout>

            <div className=" flex items-center justify-center h-[100vh]">

                <form noValidate onSubmit={onFormSubmit} className="flex flex-col items-center justify-center gap-2 p-5 text-white rounded-md shadow-[0_0_10px_black] w-[22rem] ">

                    <h1 className="font-semibold  text-3xl"  >
                        Contact Us Form
                    </h1>

                    <div className="flex flex-col w-full gap-2 ">
                        <label htmlFor="name" className="text-xl font-semibold">Name</label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            type="text"
                            onChange={handleInputChange}
                            value={userInput.name}
                        />
                    </div>

                    <div className="flex flex-col w-full gap-2 ">
                        <label htmlFor="email" className="text-xl font-semibold">Email</label>
                        <input
                            className="bg-transparent border px-2 py-1 rounded-sm"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            type="email"
                            onChange={handleInputChange}
                             value={userInput.email}

                        />
                    </div>

                    <div className="flex flex-col w-full gap-2 ">
                        <label htmlFor="message" className="text-xl font-semibold">Message</label>
                        <textarea
                            className="bg-transparent border px-2 py-1 rounded-sm resize-none h-40"
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            onChange={handleInputChange}
                             value={userInput.message}

                        />
                    </div>

                    <button className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer" type="submit">Submit</button>


                </form>


            </div>




        </HomeLayout>
    )
}

export default Contact;