import { useDispatch, useSelector } from "react-redux";
import NoChatSelected from "./NoChatSelected";
import SideBar from "./SideBar";
import ChatUser from "./ChatUser";
import NoSideBar from "./NoSideBar";
import { useEffect } from "react";
import { fetchUser, fetchMessage, setSelectedUser } from "../utils/chatSlice";

const Chat = ()=>{
    
    const dispatch = useDispatch();
    const users = useSelector((store)=>store?.chat?.users?.data);
    console.log(users);

    const selectedUser = useSelector((state)=> state?.chat?.selectedUser);

    useEffect(()=>{
        dispatch(fetchUser());
    },[]);

    return (
        <div className="h-screen">
            <div className=" flex justify-center pt-14 px-4">
                <div className="brightness-150  shadow-2xl shadow-zinc-800 rounded-lg w-full max-w-6xl min-h-[calc(100vh-5rem)] overflow-visible relative z-0">
                    <div className="flex rounded-lg h-full ">
                        {users===undefined || users.length==0 ? <NoSideBar /> : 
                       <div className="flex-col w-3/12 pt-6 items-center border-r-4  border-r-neutral-800">
                       {users.map((curr)=><SideBar userData={curr}/>)}
                       </div>
                       }
                        <div className="w-9/12">
                        {!selectedUser ? <NoChatSelected /> : <ChatUser />}
                       </div>
                    </div>
                </div>

            </div>
        </div>
    )
};


export default Chat;