import { useEffect, useState } from "react";

function Body(){
    const [profiles,setProfile] = useState([]);
   
    async function GenerateProfiles(){
        const resp = await fetch("https://api.github.com/users?per_page=10");
        const data = await resp.json();
        setProfile(data);
    }

    useEffect(()=>{
        GenerateProfiles();
    },[])
    

    return (
        <div className="githubProfiles">
            {
            profiles.map((value) => (
                <div className="allten" key={value.id}>
                    <img src={value.avatar_url} />
                    <h2>{value.login}</h2>
                    <a href={value.html_url} target="_blank">Github Profile Link</a>
                </div>
            ))
            }
        </div>
    )
}

export default Body;