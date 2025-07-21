import { Eye, EyeOff, Lock, Mail, UserRound, Speech  } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import ImagePattern from "./ImagePattern";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

function Signup(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPasswordFirst, setShowPasswordFirst] = useState(false);
    const [showPasswordSecond, setShowPasswordSecond] = useState(false);

    const [confirmPasswordError, setConfirmPasswordError] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState("");

    const navigate = useNavigate();

    const handleClick = async ()=>{
        try {

            if(password !== confirmPassword){
                toast.error("Password not matched");
            }
            const user = await axios.post(BASE_URL+"/signup",{
              firstName:firstName,
              lastName:lastName,
              age:age,
              gender:gender,
              email: email,
              password: password
          },{withCredentials: true});

          toast.success("Profile created successfully!");

          return navigate("/login");
            
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    return <>
    <div>
        <Toaster position="top-center" reverseOrder={false}/>
    </div>
    <div className="min-h-screen grid lg:grid-cols-2">

      <div className="flex flex-col justify-center items-center p-3 sm:p-12">
        <div className="w-full max-w-md space-y-8">

          <div className="text-center mb-4">
            <div className="flex flex-col items-start gap-2 group">
              <div className="size-12 animate-bounce rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
</svg>
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content/60">Create your account</p>
            </div>
          </div>

          <div  className="space-y-2 ">
            <div className="flex flex-row gap-2">
          <div className="">
          <label  className="label">
              <span className="label-text font-medium">First name</span>
            </label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserRound className="h-5 w-5 text-base-content/40" />
                </div>
            <input type="text" id="first_name" value={firstName} className={`input input-bordered w-full pl-10`} placeholder="John" required onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
        </div>
        <div className="">
            <label  className="label">
              <span className="label-text font-medium">Last name</span>
            </label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserRound className="h-5 w-5 text-base-content/40" />
                </div>
            <input type="text" id="last_name" value={lastName} className={`input input-bordered w-full pl-10`} placeholder="Doe" required onChange={(e)=> setLastName(e.target.value)}/>
            </div>
        </div>
        </div>

        <div className="flex flex-row gap-2">
          <div className="">
          <label  className="label">
              <span className="label-text font-medium">Age</span>
            </label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserRound className="h-5 w-5 text-base-content/40" />
                </div>
            <input type="number" id="first_name" value={age} className={`input input-bordered w-full pl-10`} placeholder="0" required onChange={(e)=> setAge(e.target.value)}/>
            </div>
        </div>
        <div className="">
            <label  className="label">
              <span className="label-text font-medium">Gender</span>
            </label>
            <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Speech className="h-5 w-5 text-base-content/40" />
                </div>
                <select id="gender" value={gender} className="select select-bordered w-full pl-10" required onChange={(e)=> setGender(e.target.value)}>
                      <option value="" disabled selected>Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="other">others</option>
    </select>
            {/* <input type="text" id="last_name" className={`input input-bordered w-full pl-10`} placeholder="Doe" required /> */}
            </div>
        </div>
        </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10`}
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value )}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPasswordFirst ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value )}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPasswordFirst(!showPasswordFirst)}
                >
                  {showPasswordFirst ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPasswordSecond ? "text" : "password"}
                  className={`input input-bordered w-full pl-10`}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => {
                    const value = e.target.value;
                    setConfirmPassword(value);
                    setConfirmPasswordError(value == password);
                  }}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPasswordSecond(!showPasswordSecond)}
                >
                  {showPasswordSecond ? (
                    <EyeOff className="h-5 w-5 text-base-content/40" />
                  ) : (
                    <Eye className="h-5 w-5 text-base-content/40" />
                  )}
                </button>
              </div>
              {confirmPassword && (confirmPasswordError ? (<label className="label">
                <span className="label-text font-medium text-green-500">Password Matched</span>
              </label>) :(<label className="label">
                <span className="label-text font-medium text-red-600">Password Not Matched</span>
              </label>))}
            </div>

            <button type="submit" className="btn btn-primary w-full" onClick={handleClick} disabled={!confirmPasswordError}>
              SignUp
            </button>
          
          </div>
          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Login
              </Link>
            </p>
          </div>

        </div>
      </div>

      <ImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your freinds."}
      />

    </div>
    
    </>
}

export default Signup;