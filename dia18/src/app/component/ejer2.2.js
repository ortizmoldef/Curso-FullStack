'use client'
import { useContext } from 'react';
import { CounterContext } from './ejer2';

const Counter = () => {
  const { count, incremento, decremento } = useContext(CounterContext);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incremento}>Incrementar</button>
      <button onClick={decremento}>Decrementar</button>
    </div>
  );
};


export default Counter;
