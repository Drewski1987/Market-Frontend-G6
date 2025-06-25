import { useState } from "react";

export default function Register(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    async function handleSubmit(event){
        event.preventDefault();

        try{
            const response = await fetch ("http://localhost:3000/users/register", {
                method: "POST",
                headers: {'Content-type':'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            const result = await response.json();

        } catch (error){
            console.log(error)
        };
    };
    return (
        <>

        <h2 className="registerTitle">Sign Up Here!</h2>
        <br/>
        <div className="registerForm">
        {
            <form onSubmit={handleSubmit}>
                <label className="userTitle">
                    Username: 
                        <input
                            name ="username"
                            required
                            onChange = {(e)=>setUsername(e.target.value)}
                            value = {username}
                        />
                </label>
                <br/><br/>
                <label className="passTitle">
                    Password: 
                        <input
                            name = "password"
                            required
                            onChange = {(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                </label>
                <br/><br/>
                <button className = "button">Submit</button>

            </form>
        }
        </div>
        </>
    )
}