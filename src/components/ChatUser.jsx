import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessage } from "../utils/chatSlice";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import ChatHeaderShimmer from "../shimmer/chatHeaderShimmer";
import ChatMessageShimmer from "../shimmer/chatMessageShimmer";
import ChatInputShimmer from "../shimmer/chatInputShimmer";

const ChatUser = ()=>{

    const dispatch = useDispatch();
    const selectedUser = useSelector((store)=>store?.chat?.selectedUser);
    const isMessageLoading = useSelector((store)=>store?.chat?.isMessageLoading);
    const messages = useSelector((store)=>store?.chat?.messages);

    useEffect(()=>{
        dispatch(fetchMessage(selectedUser._id));
    },[selectedUser]);

    if(isMessageLoading) return (
    <div className="flex-1 flex flex-col">
        <ChatHeaderShimmer />
        <ChatMessageShimmer />
        <ChatInputShimmer />
    </div>)

    return (
        <div className="w-full flex flex-1 flex-col z-0">
            <ChatHeader />

            <p>Messages...</p>

            <MessageInput />
        </div>
    )
};

export default ChatUser;