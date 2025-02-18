'use client'
import React, { useContext } from 'react';
import { UserContext } from './ejer1';

const UserProfile = () => {
    const { userName } = useContext(UserContext)

    return(
        <div>
            <h1>
                Hola, {userName}!
            </h1>
        </div>
    )
}

export default UserProfile