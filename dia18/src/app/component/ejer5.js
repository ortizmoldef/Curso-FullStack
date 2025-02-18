'use client'
import React, { createContext, useState} from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggin, setIsLoggin] = useState(false); 
    
    const login = () => {
        setIsLoggin(true)
    }

    const unlogout = () => {
        setIsLoggin(false)
    }

    return (
      <AuthContext.Provider value={{ isLoggin, login, unlogout }}>
        {children}
      </AuthContext.Provider>
    );
  };

  
export const useAuth = () => {
    return useContext(AuthContext);
  };