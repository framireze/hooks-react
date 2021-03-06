import React, { useRef } from 'react'
import './styleUseRef.css';
export const FocusScreen = () => {
    const inputRef = useRef();
    
    const handleClick = () => {
        //document.querySelector('input').select();     //Viene a ser lo mismo q la linea abajo
        inputRef.current.select();
        console.log(inputRef);
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                ref = {inputRef}
                className="form-control"
                placeholder="Su nombre"
            />
            <button
                className="btn btn-outline-primary mt-5"
                onClick= { handleClick }
            >Focus</button>
        </div>
    )
}
