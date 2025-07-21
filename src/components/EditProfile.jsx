import { useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import toast, { Toaster } from "react-hot-toast";
import { CircleX } from 'lucide-react';
import { Upload } from 'lucide-react';

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

    const handlePhotoUpload = async (e)=>{

        const file = e.target.files[0];

        if(! file) return;

        const allowedType = ['image/jpeg','image/png','image/jpg'];
        if(! allowedType.includes(file.type)){
            toast.error("Invalid File Type");
            return ;
        }

        const previewUrl = URL.createObjectURL(file);

        const formdata = new FormData();
        formdata.append("file",file);
        formdata.append("upload_preset","devconnect_preset");

        try {
            toast.loading("Uploading image...");

    const res = await axios.post("https://api.cloudinary.com/v1_1/dqznilxlc/image/upload",formdata);
    setPhotoUrl(res.data.secure_url); 
    toast.dismiss();
    toast.success("Image uploaded successfully!");

  } catch (error) {
    toast.dismiss();
    toast.error("Image upload failed");
    console.error("Upload error:", error);
  }

    }

    return <>
        <div className="">
            <Toaster position="top-center" reverseOrder={false}/>
        </div>
        <div className="w-full grid grid-cols-1  my-6 px-6 py-4 mx-auto md:h-screen lg:py-0">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-pretty">
                  {firstName}'s profile
              </h1>
                    <div className="md:flex mt-4 md:justify-between md:gap-4">
                  <div className="md:w-1/2 my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                      <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" />
                  </div>
                  <div className="md:w-1/2 my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                      <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz" />
                  </div>
                  </div>
                  <div className="md:flex md:justify-between md:gap-4">
                  <div className="mt-3 md:w-1/2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                      <input disabled type="email"  placeholder={email} className="bg-gray-50 border border-gray-300 cursor-not-allowed text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  <div className="mt-3 md:w-1/2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                      <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}}   placeholder="0" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </div>
                  </div>
                  <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                  <div className="flex flex-wrap mb-2">
                  <div className="flex items-center mx-2 mt-1">
                    <input id="country-option-1" type="radio" name="gender" value="Male" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked={gender==="Male"} onChange={(e)=>{setSelectedGender(e.target.value)}} />
                    <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                    Male
                    </label>
                </div>
                <div className="flex items-center mx-2 mt-1">
                    <input id="country-option-1" type="radio" name="gender" value="Female" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked={gender==="Female"} onChange={(e)=>{setSelectedGender(e.target.value)}} />
                    <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                    Female
                    </label>
                </div>
                <div className="flex items-center mx-2 mt-1">
                    <input id="country-option-1" type="radio" name="gender" value="other" className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked={gender==="other"} onChange={(e)=>{setSelectedGender(e.target.value)}} />
                    <label  className="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                    Other
                    </label>
                </div>
                  </div>
                  <div className="">
                    <label className="text-white font-medium text-sm mb-2 block">Upload Photo</label>

                    
                    <div className=" flex flex-col md:flex-row ">
                        <div className="flex md:w-1/2 mr-4 border-2 shadow-xl rounded-lg mb-3">
                        <label htmlFor="fileUpload" className=" flex items-center justify-center w-full border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 dark:border-gray-600 h-32 md:h-40 text-gray-500 hover:bg-gray-400 dark:hover:bg-gray-800 transition">
                            <span className="text-2xl mx-2 font-medium"><Upload /></span>
                                <span className="text-sm font-medium">Choose a file</span>
                                    <input
                                      id="fileUpload"
                                      type="file"
                                      accept="image/*"
                                      onChange={handlePhotoUpload}
                                      className="hidden"
                                    />
                        </label>
                        </div>

                    {photoUrl && (
                      <div className="w-40 h-40 md:w-48  rounded overflow-hidden">
                        <img
                          src={photoUrl}
                          alt="Preview"
                          className="object-cover rounded shadow-md w-full max-h-48"
                        />
                      </div>
                    )}
                    </div>


                  </div>
                <div className="mt-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About</label>
                <textarea id="message" value={about} onChange={(e)=>{setAbout(e.target.value)}} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>

                <div className="mt-3">
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
                  
        </div>
    
  </>
}

export default EditProfile;