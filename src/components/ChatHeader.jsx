import { useDispatch, useSelector } from "react-redux";
import { GiTireIronCross } from "react-icons/gi";
import { setSelectedUser } from "../utils/chatSlice";

const ChatHeader = ()=>{

    const selectedUser = useSelector((store)=>store?.chat?.selectedUser);
    const dispatch = useDispatch();

    const handleClick = ()=>{
        dispatch(setSelectedUser(null));
    }

    return (
        <div className="p-2.5 border-b border-base-300 z-[10]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="">
                        <img src={selectedUser?.photoUrl} className="size-10 rounded-full" alt="avatar"/>
                    </div>

                    <div className="">
                        <h2 className="font-serif font-medium ">{(selectedUser.firstName+" "+selectedUser.lastName).toLowerCase()}</h2>
                    </div>
                </div>

                <button className="text-xl mx-2" onClick={handleClick}><GiTireIronCross /></button>
            </div>

        </div>
    )
};

export default ChatHeader;