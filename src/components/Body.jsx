import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Body(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
  const fetchUser = async ()=>{
    try {
      const res = await axios.get(BASE_URL+"/profile/view",{withCredentials: true});
      dispatch(addUser(res.data));
      
    } catch (error) {
      if(location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/signup"){
        navigate("/login");
      }
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchUser();
  },[])

    return <>
    <NavBar />
    <Outlet />
    </>

}

export default Body;