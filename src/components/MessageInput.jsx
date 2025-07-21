import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdCancel } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { TiLocationArrow } from "react-icons/ti";
import { sendMessage } from "../utils/chatSlice";
import { useDispatch } from "react-redux";

const MessageInput = ()=>{

    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef();
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const removeImage = ()=>{
        setImagePreview(null);
        if(fileInputRef.current) fileInputRef.current.value="";
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!text.trim() && !imagePreview) return ;
        try {
            dispatch(sendMessage({text: text.trim(),image: imagePreview,}));

            setText("");
            setImagePreview("");
            if(fileInputRef.current) fileInputRef.current.value="";
        } catch (error) {
            console.error("failed to send message:", error);
        }

    }

    const handleImageChange = (e)=>{
        const file = e.target.files[0];
        if(!file.type.startsWith("image/")){
            toast.error("Please select an image file");
            return ;
        }

        const reader = new FileReader();
        reader.onloadend = ()=>{
            setImagePreview(reader.result);
        };

        reader.readAsDataURL(file);
    }

    return (
        <div className="p-4 w-full">
            {imagePreview && (
                <div className="mb-3 flex items-center gap-2">
                    <div className="relative">
                        <img src={imagePreview} alt="preview" className="size-24 rounded-lg border border-zinc-700"/>
                        <button className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2  bg-white shadow-md text-sm text-black font-medium rounded-full" onClick={removeImage}><MdCancel /></button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="flex flex-1 justify-center items-center gap-1">
                <input type="text" className="w-full mr-2 input input-bordered rounded-lg input-sm sm:input-md" placeholder="Type a message.." value={text} onChange={(e)=>setText(e.target.value)}/>
                <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={handleImageChange}/>
                <button className={`hidden btn btn-square rounded-full sm:flex size-8 ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`} 
                onClick={()=>fileInputRef.current?.click()}><GrGallery className="text-xl"/></button>

                <button className={`${(!text.trim() && !imagePreview)? "text-gray-600" : "text-green-400" }`} disabled={!text.trim() && !imagePreview}><TiLocationArrow  className="text-3xl"/></button>
            </div>
            </form>
        </div>
    )
};

export default MessageInput;