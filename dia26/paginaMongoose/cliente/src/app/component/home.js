'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);  
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleRegisterClick = () => {
    if (router) {
      router.push('/registro');  
    } else {
      console.log("El router no está disponible aún.");
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <h1>Bienvenido a la Aplicación</h1>
      <button onClick={handleRegisterClick}>Ir a Registro</button>
    </div>
  );
}
