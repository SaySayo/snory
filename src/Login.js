import React from 'react'
import TextField from './TextField'
import Buttons from './Buttons'

export default function Login() {
    return (
        <div className='center'>
            <center >
            <TextField placeholder={'USERNAME'} icon={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABC0lEQVRIie2UMUsDQRSEZ9OksjGg4CWdSZHa0tpCsPOvmF+SPxEOK00Q65RptLEQK4mVAU0Zwc/CUY7oXRZZuxt4HMzOm7nbt7dSjRQA2kAOLF3nQDel+YKfWABZioDchhdA5ro0N0oRsLRZVuA65l429TdiMvwMf33JavfPgeJtabvG5vIUAT3guWTI+wm+QfJgR8CrK09mXqP06AENSQeSjiUdStqT1PHyo6QnSVNJE0mzEMJ7VCLQBAbA/JeTU4Y5cAY0N5nvAreFxgdgCJwAfWDL1Tc3tOYLN8BOVcC1hffAKRD19wJHwJ17r6qEbxZtxxiv9bbcuyryYU2EEiCE8O0bc9nV+F98AHLxd02oUT9uAAAAAElFTkSuQmCC"}/>
            <TextField placeholder={'PASSWORD'} icon={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAA1UlEQVRIie2SOw6CQBCGN8ZEC7iB3Aek8RR0Po6JVmhvAzdQ+49mTFbYxc1gAoV/Ms3u/5idHWOmBrAGjsAZeEmVwAFYjTVPgBt+VMBmTOdv8yuQA5FUbt1VqpcAJ8s8ctzHwF04e03ARcT5AGcnnFIT8BRxr3uLEwvnoQkAYCxv4RCkQNM18MHi1UAa0nn9zXQAdUhA0GhCdb0R/RrzCQC2QCOVqRN9sxRj72dO9gc9DLwgkxV27nvw9v3XtIul46wxxiSaMYn2A64XFC5ioHmh0M0cLYZEpq7t4/gvAAAAAElFTkSuQmCC"}/>
            <Buttons />
            <p>Forgot Password?</p>
            <p>Sign up</p>
            </center>
        </div>
        
        )
}
