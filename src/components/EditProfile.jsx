import { useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { CircleX } from 'lucide-react';

function EditProfile({ user }){
    const [firstName, setFirstName] = useState(user.data.firstName);
    const [lastName, setLastName] = useState(user.data.lastName);
    const [age, setAge] = useState(user.data.age);
    const [gender, setSelectedGender] = useState(user.data.gender);
    const [photoUrl, setPhotoUrl] = useState(user.data.photoUrl);
    const [about, setAbout] = useState(user.data.about);
    const [email, setEmail] = useState(user.data.email);
    const [error, setError] = useState(null);

    const [skills, setSkills] = useState(user.data.skills || []);
    const [skillInput, setSkillInput] = useState("");

    // console.log(user); 

    const dispatch = useDispatch();

    const handleEditProfile = async ()=>{
        try {
            const user = await axios.patch(BASE_URL+"/profile/edit",{
                firstName,
                lastName,
                age,
                gender,
                about,
                photoUrl,
                skills
            },{withCredentials: true});

            dispatch(addUser(user?.data));
            setError(null);
            toast.success("Profile updated successfully.");
            
        } catch (error) {
            // console.log(error);
            setError(error?.response?.data || "Something Went Wrong..!");
            toast.error(error?.response?.data);
        }

    }

    const handleAddSkill = (e)=>{
        if(e.key=="Enter" && skillInput.trim()!="" && skills.length<10){
            e.preventDefault();
            setSkills([...skills, skillInput.trim()]);
            setSkillInput("");
        }
    }

    const handleRemoveSkill = (index)=>{
        setSkills(skills.filter((_,i)=> i!=index));
    }

    return <>
        <div className="">
            <Toaster position="top-center" reverseOrder={false}/>
        </div>
        <div className="w-full grid grid-cols-1  my-16 px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-pretty">
                  Your Profile
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input disabled type="email"  placeholder={email} className="bg-gray-50 border border-gray-300 cursor-not-allowed text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                      <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}   placeholder="0" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                  <div className="flex flex-wrap">
                  <div className="flex items-center mx-2">
                    <input id="country-option-1" type="radio" name="gender" value="Male" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked={gender==="Male"} onChange={(e)=>{setSelectedGender(e.target.value)}} />
                    <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                    Male
                    </label>
                </div>
                <div className="flex items-center mx-2">
                    <input id="country-option-1" type="radio" name="gender" value="Female" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked={gender==="Female"} onChange={(e)=>{setSelectedGender(e.target.value)}} />
                    <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                    Female
                    </label>
                </div>
                <div className="flex items-center mx-2">
                    <input id="country-option-1" type="radio" name="gender" value="other" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked={gender==="other"} onChange={(e)=>{setSelectedGender(e.target.value)}} />
                    <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                    Other
                    </label>
                </div>
                  </div>
                <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo-Url</label>
                      <input type="text" value={photoUrl} onChange={(e)=>{setPhotoUrl(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" />
                </div>
                <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About</label>
                <textarea id="message" value={about} onChange={(e)=>{setAbout(e.target.value)}} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>

                <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills</label>
                    <input value={skillInput} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=> setSkillInput(e.target.value)} disabled={skills.length>=10} onKeyDown={handleAddSkill} placeholder="type skill here..." />

                    <div className="flex flex-wrap gap-2 mt-2">
                        {skills.map((skill,index)=>(
                            <div key={index} className="bg-blue-500 text-white px-3 py-1 m-1 rounded-lg flex items-center">
                                {skill}
                                <button className="ml-2 text-white font-bold text-lg focus:outline-none" onClick={()=> handleRemoveSkill(index)}><CircleX /></button>
                            </div>
                        ))}

                    </div>
                </div>
                  
                  <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleEditProfile}>Edit Profile</button>
                  
              </form>
          </div>
        </div>
    
  </>
}

export default EditProfile;