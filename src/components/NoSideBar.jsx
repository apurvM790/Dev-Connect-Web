import { FcRedo } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { TbUsersGroup } from "react-icons/tb";

const NoSideBar = ()=>{

    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/feed");
    }

    return (
        <div className="w-3/12 flex justify-center items-center border-r-2 border-x-purple-300 border-r-neutral-800">
            <div className="flex flex-col items-center"> 
                <TbUsersGroup className="text-4xl mb-3 animate-pulse duration-500"/>
                <h2 className="font-mono text-lg font-medium">No Connections..</h2>
                <h2 className="font-serif text-sm font-light flex items-center mt-2">make friends! <span className="border-dashed border-white border shadow-md rounded-md ml-2 px-3 cursor-pointer py-1 text-2xl" onClick={handleClick}><FcRedo /></span></h2>
            </div>
        </div>
    )
};

export default NoSideBar;