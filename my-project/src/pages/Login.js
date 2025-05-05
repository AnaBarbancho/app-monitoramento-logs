import React, { useState } from 'react';

export default function Login() {
  // Usando useState para armazenar os valores dos inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para lidar com o submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Lógica do login (aqui você pode adicionar sua lógica de validação ou envio para o backend)
    console.log('Email:', email);
    console.log('Password:', password);

    // Exemplo de navegação ou algo a fazer após o login (como redirecionar)
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
