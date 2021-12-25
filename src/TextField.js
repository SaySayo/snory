import React from 'react'

export default function TextField({placeholder,icon}) {
    return (
        <div className='container'>
            <div className="input-div">
            <img className='icon' src={icon}/>
                <input className={placeholder} type="text" placeholder={placeholder}/>

            </div>
        </div>
    )
}
