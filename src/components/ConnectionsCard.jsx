import { useState } from "react";
import FreindsCard from "./FreindsCard";

function ConnectionsCard({connection}){
    // console.log(connection);
    const [toggle, setToggle] = useState(false);
    const handleClick = ()=>{
        setToggle(!toggle);
    }

    return <>
        {(connection && toggle===false) ? (<div className="w-7/12 flex justify-between  h-auto rounded-lg shadow-2xl bg-gray-300 p-4 hover:scale-105 hover:bg-blue-200" onClick={handleClick}>
    <div className="flex items-center space-x-4">
        <img className="m-3 rounded-full w-14 h-14 border-2 border-blue-500" 
             src={connection.photoUrl} 
             alt="Profile Picture" />
        <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-black">{connection.firstName+" "+connection.lastName}</h1>
            <h1 className="text-base font-extralight text-black truncate max-w-xs">{connection.about}</h1>
        </div>
    </div>
</div>) : <FreindsCard data={connection} handleShowCard={handleClick} key={connection._id}/>}
    </>

}

export default ConnectionsCard;