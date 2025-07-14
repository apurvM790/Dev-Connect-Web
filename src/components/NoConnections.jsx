import { useNavigate } from "react-router-dom";
import no_request from "../images/NoRequest.png";

function NoConnections (){

    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/feed");
    }

    return <>
        <div className="flex flex-col justify-center items-center my-auto mx-auto bg-black h-screen">
            <div className="my-10">
            <img className="w-64 h-64" src={no_request} alt="no-request"/>
            </div>
            <div className="border-2 border-gray-300 p-2 rounded-tr-md rounded-bl-md animate-pulse">
                <h1 className="text-xl font-normal italic text-gray-300">**No Connections Available**</h1>
                
            </div>
            <div className="m-4">
                <h1 className="text-sm font-light text-gray-300">start making new freinds!</h1>
                <button className="text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleClick}>
                    add freinds
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </button>
            </div>
        </div>
    </> 
}

export default NoConnections;