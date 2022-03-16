import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../04-useRef/styleUseRef.css';
export const MemoHook = () => {

    const {counter, increment} =useCounter(500);
    const [show, setShow] = useState(true);

    const memoProcesado= useMemo(() => procesoPesado(counter), [counter]);
    //useMemo: recibe una funcion (callback), si el counter cambia se necesita una nueva version memorizada del resultado de esa función
    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p> {memoProcesado} </p>
            <button
                className="btn btn-primary"
                onClick = {increment}
                >+1
                </button>

            <button
                className = "btn btn-outline-primary ml-3"
                onClick = { () => {setShow(!show)}}
                >
                Show/Hide {JSON.stringify(show)}            
            </button>
        </div>
    )
}
