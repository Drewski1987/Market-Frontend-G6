import { useState } from "react";

export default function Login ({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //API call recalls information and sets the token for the user
async function handleSubmit (event){
    event.preventDefault();
    try{
        const response = await fetch ("localhost3000/users/login", {
            method: "POST",
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const result = await response.json();
        setToken(result.token);
    }catch(error){
        console.log(error)
    };
}


return(
    <>
    <h2>Login Here!</h2>
    <form onSubmit={handleSubmit}>
    <label>
        Username: <input className="usernameInput"
        name = "username"
        required
        onChange={(e)=>setUsername(e.target.value)}
        value={username}/>
    </label>
    <br/><br/>
    <label> Password: <input
        className = "passwordInput"
        name="password"
        required
        onChange={(e)=>setPassword(e.target.value)}
        value={password}/>
         </label>
         <br/><br/>
    <button className="button"> Login </button>

    </form>

    </>

)
};