import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import Cards from "./Cards";

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
        {feed && <div className="flex justify-center my-20">
            <Cards user={feed[0]}/>
        </div>}
        </>
}

export default Feed;