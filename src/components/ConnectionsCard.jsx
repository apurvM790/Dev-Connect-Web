
function ConnectionsCard({connection}){
    console.log(connection);

    return <>
        {connection && <div className="w-7/12 flex justify-between  h-auto rounded-lg shadow-2xl bg-gray-300 p-4 hover:scale-105 hover:bg-blue-200">
    <div className="flex items-center space-x-4">
        <img className="m-3 rounded-full w-14 h-14 border-2 border-blue-500" 
             src={connection.photoUrl} 
             alt="Profile Picture" />
        <div className="flex flex-col w-8/12">
            <h1 className="text-2xl font-semibold text-black">{connection.firstName+" "+connection.lastName}</h1>
            <h1 className="text-base font-extralight text-black truncate max-w-xs">{connection.about}</h1>
        </div>
    </div>
    <div className="flex flex-wrap gap-4 mt-4 ">
        <button className="bg-blue-600 h-[50px] w-[80px] text-white px-2 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-blue-700 transition" >Accept</button>
        <button className="bg-gray-300 h-[50px] w-[80px]  text-gray-800 px-2 py-2 rounded-lg text-sm font-medium shadow-md hover:bg-gray-400 transition" >Reject</button>
    </div>
</div>}
    </>

}

export default ConnectionsCard;