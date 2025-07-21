import { useState } from "react";
import { FaHeart, FaRegHeart, FaTimes } from "react-icons/fa";
import { SlUserFemale } from "react-icons/sl";
import { GrUserManager } from "react-icons/gr";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

function Cards({ user }) {
  if (!user) return null;

  const { _id, firstName, lastName, about, age, gender, photoUrl, skills } = user;
    const dispatch = useDispatch();

  const handleSendRequest = async (status, userId)=>{
    try {

        const response = await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,
            {},{withCredentials:true});
        dispatch(removeUserFromFeed(userId));

    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="flex w-full items-start justify-center min-h-screen pt-10 md:pt-20  px-4">
      <div className="w-full sm:w-[90%] md:w-[420px] lg:w-[450px] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden ">
        <img
          src={photoUrl}
          alt="user"
          className="w-full  h-60 md:h-72 object-cover transition-transform duration-500 hover:scale-105"
        />

        <div className="p-5 text-white">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase">
            {firstName + " " + lastName}
          </h2>

          <p className="text-gray-400 text-base md:text-lg mt-2 italic line-clamp-3">
            {about}
          </p>

          <div className="flex justify-between text-sm md:text-base font-medium text-gray-300 mt-4">
            {age && (
              <p>
                <span className="text-gray-400 font-semibold mr-1">🎂 Age:</span>
                {age}
              </p>
            )}
            {gender && (
              <p className="flex items-center gap-2">
                <span className="text-gray-400 font-semibold">Gender:</span>
                {gender === "Male" ? (
                  <GrUserManager className="text-blue-400" /> 
                ) : (
                  <SlUserFemale className="text-pink-400" />
                )}
              </p>
            )}
          </div>

          {skills?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-gray-700 text-white rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-around">
            <button
              onClick={()=>handleSendRequest("interested",_id)}
              className="text-4xl transition-all  duration-300 transform hover:scale-110"
            ><FaHeart className="text-pink-500 transition   duration-300 scale-110" />
            </button>

            <button onClick={()=>handleSendRequest("ignored",_id)} className="text-4xl text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110">
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
