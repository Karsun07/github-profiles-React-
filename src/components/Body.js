import { useEffect, useState } from "react";

function Body(){
    const [profile,setProfile]=useState([]);
    async function GenerateProfiles(){
        const resp=await fetch("https://api.github.com/users?per_page=10");
        const data=await resp.json();
        setProfile(data);
    }
    useEffect(()=>{
        <GenerateProfiles/>
    },[])

   
}
export default Body;
