import { BASE_URL } from "../utils/constants";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = async ()=>{
        try {
            const user = await axios.post(BASE_URL+"/login",{
                email: email,
                password: password
            },{withCredentials: true});
            console.log(user);
            dispatch(addUser(user.data));
            return navigate("/feed");
        } catch (error) {
            console.log(error);
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
        </label>
        <label className="form-control w-full max-w-xs py-1">
                <div className="label">
                  <span className="label-text">Password*</span>
                </div>
                <input type="password" value={password} placeholder="********" className="input input-bordered w-full max-w-xs" onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={handleClick}>Login</button>
        </div>
      </div>
    </div>
</div>
    </>

}

export default Login;