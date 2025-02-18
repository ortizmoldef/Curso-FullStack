'use client'
import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('Mario 3');  
  
  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};


export {UserContext, UserProvider}
