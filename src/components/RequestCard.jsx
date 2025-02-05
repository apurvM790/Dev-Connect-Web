import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function RequestCard({ request , onRemove}){

    const [status, setStatus] = useState("");
    const fromUserId = request._id;

    const handleAcceptRequest = async ()=>{
        try {
            await axios.post(BASE_URL+"/request/review/accepted/"+fromUserId,{},{withCredentials:true});
            toast.success("Request Accepted!");
            onRemove(fromUserId);
        } catch (error) {
            console.log(error);
        }
    }

    const handleRejectRequest = async ()=>{
        try {
            await axios.post(BASE_URL+"/request/review/rejected/"+fromUserId,{},{withCredentials:true});
            toast.success("Request Rejected!");
            onRemove(fromUserId);
        } catch (error) {
            console.log(error);
        }
    }

    return <>
            <div>
            <Toaster position="top-center" reverseOrder={false}/>
            </div>
    <div className="w-7/12 flex justify-between  h-auto rounded-lg shadow-2xl bg-gray-300 p-4 hover:scale-105 hover:bg-blue-200">
    <div className="flex items-center space-x-4">
        <img className="m-3 rounded-full w-14 h-14 border-2 border-blue-500" 
             src={request?.fromUserId?.photoUrl} 
             alt="Profile Picture" />
        <div className="flex flex-col w-8/12">
            <h1 className="text-2xl font-semibold text-black">{request?.fromUserId?.firstName+" "+request?.fromUserId?.lastName}</h1>
            <h1 className="text-base font-extralight text-black truncate max-w-xs">{request?.fromUserId?.about}</h1>
        </div>
    </div>
    <div className="flex flex-wrap gap-4 mt-4 ">
        <button className="bg-blue-600 h-[50px] w-[80px] text-white px-2 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-700 transition" onClick={handleAcceptRequest}>Accept</button>
        <button className="bg-gray-300 h-[50px] w-[80px]  text-gray-800 px-2 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-gray-400 transition" onClick={handleRejectRequest}>Reject</button>
    </div>
</div>
</>
}

export default RequestCard;