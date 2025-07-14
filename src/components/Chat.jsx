import { useSelector } from "react-redux";
import NoChatSelected from "./NoChatSelected";
import SideBar from "./SideBar";
import ChatUser from "./ChatUser";

const Chat = ()=>{

    const selectedUser = useSelector((state)=> state.chat.selectedUser);

    return (
        <div className="h-screen">
            <div className=" flex justify-center items-center pt-14 px-4">
                <div className="bg-gray-900 shadow-xl rounded-lg w-full max-w-6xl h-[calc(100vh-5rem)]">
                    <div className="flex rounded-lg h-full ">
                        <SideBar />

                        {!selectedUser ? <NoChatSelected /> : <ChatUser />}

                    </div>
                </div>

            </div>
        </div>
    )
};


export default Chat;