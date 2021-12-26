import React, { useState } from 'react'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from './firebase';
import Buttons from './buttons'
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

export const Login = () => {
    let navigate = useNavigate();
    var gotonextPage=false;

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const goToNextPage= ()=>{
        if(gotonextPage)
        navigate('/home');
        else
        alert('Cannot Register/Sign in');
    }


    const register= async()=>{

            createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Registered")
            gotonextPage=true;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
           console.log(errorMessage)
        });
        goToNextPage();
    }
    const login= async()=>{

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Signed in");
            gotonextPage=true;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
        goToNextPage();
    };

    const googleSign= async()=>{
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log('Signed in');
                gotonextPage=true;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
            });
    };



    return (
        <div >
        <div className='center'>
            <center >
            <div>
                <div className="input-div">
                    <img className='icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABC0lEQVRIie2UMUsDQRSEZ9OksjGg4CWdSZHa0tpCsPOvmF+SPxEOK00Q65RptLEQK4mVAU0Zwc/CUY7oXRZZuxt4HMzOm7nbt7dSjRQA2kAOLF3nQDel+YKfWABZioDchhdA5ro0N0oRsLRZVuA65l429TdiMvwMf33JavfPgeJtabvG5vIUAT3guWTI+wm+QfJgR8CrK09mXqP06AENSQeSjiUdStqT1PHyo6QnSVNJE0mzEMJ7VCLQBAbA/JeTU4Y5cAY0N5nvAreFxgdgCJwAfWDL1Tc3tOYLN8BOVcC1hffAKRD19wJHwJ17r6qEbxZtxxiv9bbcuyryYU2EEiCE8O0bc9nV+F98AHLxd02oUT9uAAAAAElFTkSuQmCC'/>
                    <input onChange={(event)=>{
                        setEmail(event.target.value);
                    }} className='username' type="text" placeholder='USERNAME'/>

                </div>

                <div className="input-div">
                    <img className='icon' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRIie2SOw6CQBCGN8ZEC7iB3Aek8RR0Po6JVmhvAzdQ+49mTFbYxc1gAoV/Ms3u/5idHWOmBrAGjsAZeEmVwAFYjTVPgBt+VMBmTOdv8yuQA5FUbt1VqpcAJ8s8ctzHwF04e03ARcT5AGcnnFIT8BRxr3uLEwvnoQkAYCxv4RCkQNM18MHi1UAa0nn9zXQAdUhA0GhCdb0R/RrzCQC2QCOVqRN9sxRj72dO9gc9DLwgkxV27nvw9v3XtIul46wxxiSaMYn2A64XFC5ioHmh0M0cLYZEpq7t4/gvAAAAAElFTkSuQmCC'/>
                    <input onChange={(event)=>{
                        setPassword(event.target.value);
                    }} className='password' type="text" placeholder='PASSWORD'/>

                </div>
            </div>
            <Buttons signin={login} google={googleSign}/>
            <p>Forgot Password?</p>
            <p onClick={register}>Sign up</p>
            </center>
        </div>
        </div>
        );
}