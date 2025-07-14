import { TbMessageChatbotFilled } from "react-icons/tb";

const NoChatSelected = ()=>{

    return (
        <div className="w-full flex justify-center items-center border-1 border-green-400 p-10">
            <div className="max-w-md text-center">
                <div className="flex justify-center gap-4">
                    <div className="md:text-4xl sm:2xl flex items-center animate-bounce">
                        <TbMessageChatbotFilled />
                    </div>
                </div>

                <h2 className="text-xl font-semibold">Welcome to Chatty!</h2>
                <p className="text-sm font-light">Select a conversation from the sidebar to start chatting..</p>
                
            </div>
        </div>
    )
};

export default NoChatSelected;