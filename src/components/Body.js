import { useEffect, useState } from "react";

function Body(){
    const [profiles,setProfile] = useState([]);
    const [numberofProfiles,setnuberofProfiles]=useState("");
    async function GenerateProfiles(count){
        const resp = await fetch(`https://api.github.com/users?per_page=${count}`);
        const data = await resp.json();
        setProfile(data);
    }

    useEffect(()=>{
        GenerateProfiles(10);
    },[])
    

    return (
        <>
        <div className="container">
            <input type="text"  value={numberofProfiles} onChange={(e)=>setnuberofProfiles(e.target.value)}></input>
            <button onClick={()=>GenerateProfiles(Number(numberofProfiles))}>Search Profile</button>
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
        </div>
        </>
    )
}

export default Body;