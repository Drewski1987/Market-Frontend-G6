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
        <div className="registerForm">

        <h2>Sign Up Here!</h2>
        {
            <form onSubmit={handleSubmit}>
                <label>
                    Username: 
                        <input
                            name ="username"
                            required
                            onChange = {(e)=>setUsername(e.target.value)}
                            value = {username}
                        />
                </label>
                <br/><br/>
                <label>
                    Password: 
                        <input
                            name = "password"
                            required
                            onChange = {(e)=>setPassword(e.target.value)}
                            value={password}
                        />
                </label>

                <button className = "button">Submit</button>

            </form>
        }
        </div>
        </>
    )
}