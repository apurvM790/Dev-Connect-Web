import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../utils/chatSlice";
import { useState } from "react";

const SideBar = ({ userData })=>{

    const dispatch = useDispatch();
    const selectedUser = useSelector((store)=>store?.chat?.selectedUser);

    const handleClick = ()=>{
        dispatch(setSelectedUser(userData));
    }


    return (
        <div className="mb-2 w-full">
            <div className="border-b border-slate-800 py-1 mx-1">
        <div onClick={handleClick} className={`px-2 hover:scale-95 duration-300 cursor-pointer flex gap-3 items-center ${selectedUser && selectedUser._id===userData._id ? "bg-zinc-800" : ""} py-1 rounded-md shadow-md`}>
            <div className="">
                <img className="rounded-full  border-2 border-gray-400 size-12 bg-transparent" src={userData?.photoUrl}/>
            </div>
            <div className="">
                <h2 className="text-xl font-mono font-medium text-white">{(userData?.firstName+" "+userData?.lastName).toLowerCase()}</h2>
            </div>
        </div>
        </div>
        </div>
    )
};

export default SideBar;
