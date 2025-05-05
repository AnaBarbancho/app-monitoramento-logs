import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/login">Ir para Login</Link> |{" "}
        <Link to="/cadastro">Ir para Cadastro</Link> |{" "}
        <Link to="/produtos">Ver Produtos</Link> |{" "}
        <Link to="/perfil">Meu Perfil</Link>
      </nav>
    </div>
  );
}
