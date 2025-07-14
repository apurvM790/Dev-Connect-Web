import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import Cards from "./Cards";
import CardShimmer from "../shimmer/cardShimmer";


function Feed (){
    const feed = useSelector(store => store.feed);
    const dispatch = useDispatch();

    const getFeed = async ()=>{   
        try {
            if(feed) return;
            const res = await axios.get(BASE_URL+"/feed",{withCredentials:true}); 
            console.log(res.data.data);
            dispatch(addFeed(res?.data?.data));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getFeed();
    },[]);

    return <>
        {feed ? (<div className="flex flex-wrap gap-0 w-full h-screen">
            <Cards user={feed[0]}/>
        </div>): <CardShimmer /> }
        </>
}

export default Feed;