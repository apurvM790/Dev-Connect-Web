import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import ConnectionsCard from "./ConnectionsCard";
import NoConnections from "./NoConnections";

function Connections(){

    const [connections, setConnections] = useState([]);

    const fetchConnections = async ()=>{
        try {
            const res = await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
            // console.log(res);
            setConnections(res?.data?.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchConnections();
    },[])

    // console.log(connections);

    return <> 
    {connections.length!=0 ?
        (<div className="flex flex-col justify-center items-center my-4 gap-4">
        {(connections.map(((connection)=><ConnectionsCard connection={connection} key={connection._id}/>)))}
    </div>) : <NoConnections />
}</>
}

export default Connections;