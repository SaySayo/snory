import React from 'react'
// import './Landing.css';
import { useNavigate } from 'react-router-dom';



export default function Landing() {
    let navigate = useNavigate();
    function handleClick() {
    navigate('/login');
    }
    return (
        <div>
            <div align="right">
            <div class="loader">
                {
                    setTimeout(handleClick, 3000)

                }
            </div>
            </div>
        </div>

    )
}
