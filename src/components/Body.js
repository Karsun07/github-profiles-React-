import { useEffect, useState } from "react";

function Body(){
    const [profiles,setProfile] = useState([]);
    const [numberofProfiles,setnuberofProfiles]=useState("");
    const [user,setUser]=useState("");

    async function GenerateProfiles(count){
        try{
            const ran=Math.floor(1+Math.random()*1000);
            const resp = await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
            const data = await resp.json();
        setProfile(data);
        }
        catch(error){
            console.log("Error fetching problem :",error);
        }
    }

    // async function generateUser(){
    //     try{
    //         const resp = await fetch(`https://api.github.com/users/${user}`);
    //         const data = await resp.json();
    //         setProfile([data]);
    //     }   
    //     catch(error){
    //         console.log("Error fetching problem :",user);
    //     }
    // }
    // or
    const generateUser = useCallback(async ()=>{
        try{
            const resp = await fetch(`https://api.github.com/users/${user}`);
            const data = await resp.json();
            setProfile([data]);
        }
        catch(error){
            console.log("Error fetching user:", error);
        }
    },[user]);

    useEffect(()=>{
        GenerateProfiles(10);
    },[])

    return (
        <>
        <div className="container">
            <input type="text" value={numberofProfiles} onChange={(e)=>setnuberofProfiles(e.target.value)} />
            <button onClick={()=>GenerateProfiles(Number(numberofProfiles))}>Search Profile</button>

            <input type="text" placeholder="enter username" value={user} onChange={(e)=>setUser(e.target.value)} />
            <button onClick={generateUser}>Find User</button>

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