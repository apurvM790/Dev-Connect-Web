import { TbMessageChatbotFilled } from "react-icons/tb";

const NoChatSelected = ()=>{

    return (
        <div className="flex h-full justify-center items-center p-6">
            <div className="text-center">
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