import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { removeFeed } from "../utils/feedSlice";
import { Link } from 'react-router';

function NavBar(){
  const user = useSelector((store)=> store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const handleLogOut = async ()=>{
      try {
          await axios.post(BASE_URL+"/logout",{},{withCredentials: true});

        dispatch(removeUser());
        dispatch(removeFeed());
        navigate("/login");
        
      } catch (error) {
          console.log(error);
      }
    }

    return <>
    <div className="navbar bg-base-300 px-6">
  <div className="flex-1">
    <a className="btn btn-ghost text-3xl font-bold bg-gradient-to-r from-orange-500 via-purple-300 to-cyan-300 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(255,0,255,0.7),0_0_30px_rgba(255,0,255,0.5)] ">𝕯𝖊𝖛-𝕮𝖔𝖓𝖓𝖊𝖈𝖙</a>
  </div>
  {user && <div className="flex-none gap-2">
    {/* <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div> */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User"
            src={(user?.data?.photoUrl) } />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/connections" className="justify-between">
            Connections
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogOut}>Logout</a></li>
      </ul>
    </div>
    <Link to="/requests" className="btn btn-ghost btn-circle" >
      <div className="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </Link>
  </div>}
        </div>
    </>

}

export default NavBar;