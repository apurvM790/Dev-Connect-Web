import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import Cards from "./Cards";
import Matches from "./Matches";

function Feed (){
    const feed = useSelector(store => store.feed);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getFeed = async ()=>{
        try {
            if(feed) return;
            const res = await axios.get(BASE_URL+"/feed",{withCredentials:true});
            console.log(res);  
            dispatch(addFeed(res?.data?.data));

        } catch (error) {

            console.log(error);
        }
    }

    useEffect(()=>{
        getFeed();
    },[])

    return <>
        {feed && (<div className="flex flex-wrap gap-0 w-full h-screen">
            <div className="bg-gray-900 border-r-4 border-sky-900 shadow-xl shadow-sky-800 flex w-3/12">
                <Matches />
            </div>
            <div className="flex justify-center my-20 w-9/12">
            <Cards user={feed[0]}/>
        </div>
        </div>)}
        </>
}

export default Feed;