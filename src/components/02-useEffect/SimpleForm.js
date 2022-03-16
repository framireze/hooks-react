import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })

    const {name, email} = formState;

    useEffect ( () => {
        console.log('Este efecto solo se activa cuando se cambia un estado')
    },[])

    useEffect ( () => {
        console.log('Este efecto solo se activa cuando hay un cambio el estado del form')
    },[formState])

    useEffect ( () => {
        console.log('Este efecto solo se activa cuando se cambia el Estado de Nombre')
    },[email])

    const handleInputChange = ({target}) => {
        //console.log(target, '-->',target.name,'--->',[target.name]);
        setFormState({...formState,
            [target.name] : target.value})
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    type ="text"
                    name = "name"
                    className = "form-control"
                    placeholder = "Escribe tu nombre"
                    autoComplete = "off"
                    value = { name }
                    onChange = {handleInputChange}
                >
                </input>

                <input
                    type ="text"
                    name = "email"
                    className = "form-control"
                    placeholder = "prueba@gmail.com"
                    autoComplete = "off"
                    value = { email }
                    onChange = {handleInputChange}
                >
                </input>
            </div>
            {name === '123' && <Message />}      {/*  Si el name existe mostrar el componente Message */}
        </>
    )
}
