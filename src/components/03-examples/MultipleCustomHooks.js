import React from 'react'
import './multipleHooks.css'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
export const MultipleCustomHooks = () => {

    const {counter, increment}= useCounter(1)
    const {loading, data} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];      //si existe la data entonces extrae la posicion 0 de data
    //console.log(author, quote);

    return (
        <div>
            <h1>Multiples Custom Hooks</h1>
            <hr />

            {
                loading
                ?
                    (<div className="alert alert-info text-center">
                        Loadding...
                    </div>)
                :
                    (<blockquote className="blockquote text-right">
                        <p className="mb-0">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>)
            }

            <button
                className="btn btn-primary"
                onClick = {increment}
                >
                Next Quote
            </button>

        </div>
    )
}
