import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Lógica de cadastro (pode usar Firebase Auth ou outra solução)
    console.log('Cadastro feito:', email, senha);

    // Redireciona para a home após o cadastro
    navigate('/home');
  };

  return (
    <form onSubmit={handleCadastro}>
      <div>
        <h2>Cadastro</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </div>
    </form>
  );
}

export default Cadastro;
