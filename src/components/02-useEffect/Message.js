import React, { useEffect } from 'react'

export const Message = () => {
    useEffect(() => {
        const mouseMove = (e) => {
            const coors = {x: e.x, y:e.y}
            console.log(coors);
        }
        window.addEventListener('mousemove',mouseMove);
        //console.log('Componente montado')
        return () => {
            //console.log('Componente desmontado')
            //Es importante remover lo q se creo en el useEffect, xq si va a crear y removerse, lo que se creo 1 seguira y cuando se vuelva a montar el compontente tendremos duplicidad consumiendo mas recursos
            window.removeEventListener('mousemove',mouseMove);
        }
    }, [])
    return (
        <div>
            <h3>Eres genial!</h3>
        </div>
    )
}
