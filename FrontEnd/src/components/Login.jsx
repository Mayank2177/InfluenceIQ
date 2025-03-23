import React, {useState} from "react";
import "./Signup.css"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app)

const Login = ()=>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signinUser = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((value) => {
            alert("Successful");
          })
          .catch((error) => {
            alert("Error: " + error.message);
          })
    }

    return(
        <>
            <div className="signup-container">
            <h1>Login</h1>
                <form>
                    <label>Email</label>
                    <input 
                        onChange={(e)=> setEmail(e.target.value)}
                        value={email} 
                        placeholder="Enter your email" 
                        required 
                        type="email"
                    ></input>
                    <label>Password</label>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="Enter your email" required type="password"></input>
                    <button onClick={signinUser}>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login