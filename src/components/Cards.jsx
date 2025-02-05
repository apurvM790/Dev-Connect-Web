

function Cards({ user }){
    // console.log(user);
    const  { firstName, lastName, about, age, gender, skills} = user;
    return <>   
        <div className="card bg-base-300 w-2/6 h-[500px] py-2 shadow-2xl">
  <figure className="">
    <img
      src={user.photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName+" "+lastName}</h2>
    <p>{about}</p>
    {<div className="flex justify-between">
        {age && <p>{"Age: "+age}</p>}
        {gender && <p>{"Gender: "+gender}</p>}
    </div>}
    <div className="card-actions flex justify-between">
      <button className="btn btn-primary">Interested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div>
    </>
}

export default Cards;