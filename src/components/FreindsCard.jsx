
function FreindsCard({ data, handleShowCard }){

    const handleClick = ()=>{
        handleShowCard();
    }

    // console.log(data);
    return <>
        <div className="flex my-6 rounded-lg shadow-2xl justify-center flex-col items-center bg-gradient-to-br from-orange-200 via-sky-300 to-fuchsia-300 w-1/2 py-5 mx-auto" onClick={handleClick}>
            <div className="flex justify-center items-center w-40 h-40 rounded-full shadow-2xl border-2 border-fuchsia-300 hover:border-blue-400">
                <img className="rounded-full hover:scale-95 hover:border-blue-400 border-2 border-fuchsia-300" src={data.photoUrl} alt="user-image"/>
            </div>
            <div className="flex flex-col justify-center items-center m-4">
             <h1 className="text-3xl font-semibold italic text-black">{data.firstName+" "+data.lastName}</h1>   
            <div className="flex flex-wrap gap-2 my-2">
                <h1 className="text-sm font-medium text-black">Gender: {data.gender=="M" || data.gender=="Male" ? "Male" : "Female"}</h1>
                <h1 className="text-sm font-medium text-black">Age: {data.gender=="M" || data.gender=="Male" ? "Male" : "Female"}</h1>
            </div>
            </div>
            <div className="flex mx-6 flex-col my-2">
                <label className="text-lg font-medium text-black">About:</label>
                <h1 className="text-sm font-normal text-gray-700 bg-slate-300 border-2 border-gray-500 rounded-md p-2 ">{data.about}</h1>
            </div>
            <div className="flex mx-6 flex-col my-2">
                <label className="text-lg font-medium text-black">Skills:</label>
                <div className="bg-slate-300 rounded-md p-1 flex flex-wrap border-2 border-gray-500">
                {data.skills.map((skill)=><div className="bg-blue-600 p-2 m-1 rounded-md hover:bg-blue-800">
                    <h1 className="text-white">{skill}</h1>
                </div>)}
                </div>
            </div>
            
        </div>

        </>
}

export default FreindsCard;