import { useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import toast, { Toaster } from "react-hot-toast";

function Requests(){

    const dispatch = useDispatch();
    const requests = useSelector((store)=>store.requests);
    const [data, setData] = useState([]);
    const handleRequests = async ()=>{
        try {
            const res = await axios.get(BASE_URL+"/user/requests/received",{withCredentials: true});
            dispatch(addRequests(res?.data?.data));
          
        } catch (error) {
            toast.error("ERROR!");
          console.log(error);
        }
      }
    
    
      useEffect(()=>{
        handleRequests();
      },[])

      const removeFromList = (cardId)=>{
        setData(data.filter((curr)=> curr._id!=cardId));
      }
      
      useEffect(()=>{
        setData(requests);
      },[requests]);
      
    return <> 
    <div>
        <Toaster position="top-center" reverseOrder={false}/>
    </div>
    <div className="flex flex-col justify-center items-center my-4 gap-4">
        {data && data.map((curr)=><RequestCard request={curr} key={curr._id} onRemove={removeFromList}/>)}
    </div>
        </>
}

export default Requests;