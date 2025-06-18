import { useState } from "react";

export default function Login ({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //API call recalls information and sets the token for the user



return(
    <>
    <h2>Login</h2>
    <form>
    <label>
        Username: <input/>
    </label>
    <label> Password: <input/>
         </label>
    <button> Submit </button>

    </form>

    </>

)
};