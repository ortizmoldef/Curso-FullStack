'use client';

import { useState } from 'react';

export default function RegistroPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null); 

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor ingresa todos los campos');
      return;
    }
    try {
      const response = await fetch('/usuarios/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), 
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Usuario registrado correctamente!');
        setUsername(''); 
        setError(null); 
      } else {
        setError(data.message || 'Hubo un problema al registrar el usuario.');
      }
    } catch (err) {
      console.error(err);
      setError('Error al registrar el usuario.');
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </div>
  );
}
