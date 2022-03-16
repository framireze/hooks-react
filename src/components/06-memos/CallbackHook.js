import React, { useState, useCallback } from 'react'
import './memos.css'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter+1);
    // }
    //useCallback --> nos retorna una funcion

    const increment = useCallback( (num) => {
        setCounter( c => c + num );
    }, [setCounter])

    return (
        <div>
            <h1>useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment = {increment}/>
        </div>
    )
}
