import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import ConnectionsCard from "./ConnectionsCard";

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

    console.log(connections);

    return <div className="flex flex-col justify-center items-center my-4 gap-4">
        {connections && <ConnectionsCard connection={connections[0]}/>}
    </div>
}

export default Connections;