import { BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async ()=>{
        try {
            const user = await axios.post(BASE_URL+"/login",{
                email: email,
                password: password
            },{withCredentials: true});

            // console.log(user.data);
            dispatch(addUser(user.data));
            return navigate("/");
        } catch (error) {
          console.log(error);
            setError(error?.response?.data || "Something Went Wrong..!");
            // console.log(error);
        }
    }

    return <>
    
    <div className="flex justify-center my-20">
        <div className="card bg-gray-800 border-l-zinc-400 w-[400px] shadow-xl ">
        <div className="card-body">
            <h2 className="card-title text-4xl">LogIn</h2>
        
        <div>
        <label className="form-control w-full max-w-xs py-1">
                <div className="label">
                  <span className="label-text">Email*</span>
                </div>
                <input type="text" value={email} placeholder="xyz@gmail.com" className="input input-bordered w-full max-w-xs" onChange={(e)=>{setEmail(e.target.value)}}/>
                {/* {!email && <div className="label">
    <span className="label-text-alt">Bottom Left label</span>
                </div>} */}
        </label>
        <label className="form-control w-full max-w-xs py-1">
                <div className="label">
                  <span className="label-text">Password*</span>
                </div>
                <input type="password" value={password} placeholder="********" className="input input-bordered w-full max-w-xs" onChange={(e)=>{setPassword(e.target.value)}}/>
                {/* <div className="label">
    <span className="label-text-alt">Bottom Left label</span>
                </div> */}
        </label>
        </div>
        <p className="text-red-500 animate-pulse">{error}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
</div>
    </>

}

export default Login;