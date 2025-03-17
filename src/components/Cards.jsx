

function Cards({ user }){
    const  { firstName, lastName, about, age, gender, skills} = user;
    return <>   
        <div className="card bg-base-300 w-2/6 h-[500px] py-2 shadow-2xl">
  <figure className="">
    <img
      src={user.photoUrl}
      alt="user" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{about}</p>
    {<div className="flex justify-between">
        {age && <p>{"Age: "+age}</p>}
        {gender && <p>{"Gender: "+gender}</p>}
    </div>}
    <div className="card-actions flex justify-between">
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Interested
        </span>
    </button>
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Ignore
        </span>
    </button>
    </div>
  </div>
</div>
    </>
}

export default Cards;