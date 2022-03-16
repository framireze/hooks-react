import React from 'react'

export const Small = React.memo(({counter}) => {
    console.log('Small llamado');
    return (
        <>
            <small>{ counter }</small>
        </>
    )
}
)