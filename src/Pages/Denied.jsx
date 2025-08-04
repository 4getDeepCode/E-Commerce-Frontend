import { useNavigate } from "react-router-dom";

function Denied (){

     const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return(

        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">

        <h1 className="text-9xl font-extrabold text-white tracking-widest">
            403
        </h1>

        <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute ">
            Access Denied
        </div>

        <button onClick={handleGoBack} className="mt-5 relative inline-block text-sm font-medium text-white group active:text-yellow-500 focus:outline-none focus-ring"> 

            <span className="relative px-14 py-2 font-semibold text-xl  bg-yellow-500 rounded-lg group-hover:bg-yellow-600 block ">Go Back</span> 
            
        </button>

        </main>

    );
}

export default Denied;