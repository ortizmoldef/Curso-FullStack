'use client'
import { createContext, useState } from 'react';


const CounterContext = createContext();


const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const incremento = () => setCount(count + 1);
  const decremento = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, incremento, decremento }}>
      {children}
    </CounterContext.Provider>
  );
};


export { CounterContext, CounterProvider };
