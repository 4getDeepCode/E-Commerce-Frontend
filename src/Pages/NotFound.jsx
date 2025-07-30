import { useNavigate } from "react-router-dom";

function NotFound() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (

        <div className=" h-screen w-full flex flex-col  justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-gray-200 ">404</h1>

            <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute"> Page Not Found</div>

            <button className="mt-5 relative inline-block text-sm font-medium text-white group active:text-yellow-500 focus:outline-none focus-ring ">
                

                    <span onClick={handleGoBack} className="relative px-14 py-2 font-semibold text-xl  bg-yellow-500 rounded-lg group-hover:bg-yellow-600 block">
                        Go Back
                    </span>

            
            </button>

           

        </div>
    );

}

export default NotFound 