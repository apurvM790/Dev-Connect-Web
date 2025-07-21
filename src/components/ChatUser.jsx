import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, fetchMessage } from "../utils/chatSlice";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatHeaderShimmer from "../shimmer/chatHeaderShimmer";
import ChatMessageShimmer from "../shimmer/chatMessageShimmer";
import ChatInputShimmer from "../shimmer/chatInputShimmer";
import { convertTime } from "../lib/convertTime";
import socket from "../utils/socket";

const ChatUser = ()=>{

    const dispatch = useDispatch();
    const selectedUser = useSelector((store)=>store?.chat?.selectedUser);
    const isMessageLoading = useSelector((store)=>store?.chat?.isMessageLoading);
    const messages = useSelector((store)=>store?.chat?.messages);
    const currentUser = useSelector((store)=>store?.user?.data);

    useEffect(()=>{
        if(!selectedUser) {return ;}

        dispatch(fetchMessage(selectedUser._id));
        socket.emit("joinChat", { senderId: currentUser?._id, receiverId: selectedUser._id });
        

        const handleReceiveMessage = (newMessage) => {
        dispatch(addMessage(newMessage));};

        socket.on("receiveMessage", handleReceiveMessage);  

        return () => {
            socket.off("receiveMessage", handleReceiveMessage); // important for cleanup
        };
    },[selectedUser]);

    if(isMessageLoading) return (
    <div className="flex-1 flex flex-col">
        <ChatHeaderShimmer />
        <ChatMessageShimmer />
        <ChatInputShimmer />
    </div>)

    return (
        <div className="w-full h-screen flex flex-col overflow-hidden">
            <div className="shrink-0">
            <ChatHeader />
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
            {messages.map((message)=>(
                <div key={message._id} className={`chat ${message.senderId===currentUser._id ? "chat-end" : "chat-start"}`}>
                    <div className="chat-image avatar">
                        <div className="size-10 rounded-full border">
                            <img src={message.senderId===currentUser._id ? currentUser.photoUrl : selectedUser.photoUrl} alt="photoUrl"/>
                        </div>
                    </div>
                    <div className="chat-header mb-1">
                        <time className="text-xs opacity-50 ml-1">{convertTime(message.createdAt)}</time>
                    </div>
                    <div className="chat-bubble flex-col">
                    {message.image && (
                        <img src={message.image} alt="attachment" className="sm:max-w-[200px] rounded-md mb-2"/>
                    )}
                    {message.text && <p>{message.text}</p>}
                    </div>
                </div>
            ))}
            </div>
            <div className="shrink-0">
            <MessageInput />
            </div>
        </div>
    )
};

export default ChatUser;