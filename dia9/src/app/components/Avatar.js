import React from 'react';

const Avatar = ({url}) => {
    return (
        <img src={url} alt="Avatar" width={300} height={300}/>
    )
}

const MostrarAvatar = () => {
    return(
        <div>
            <h1>
                Ejercicio Avatar : 
            </h1>
            <Avatar url= "/img/messenger.jpg"/>
        </div>
    )
}

export default MostrarAvatar