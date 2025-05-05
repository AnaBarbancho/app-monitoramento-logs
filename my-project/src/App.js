import React from 'react';
import { Route, Routes } from 'react-router-dom';  // Alterado aqui para Routes
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import ProdutoDetalhes from './pages/ProdutoDetalhes';
import Produtos from './pages/Produtos';
import Perfil from './pages/Perfil';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<ProdutoDetalhes />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
  );
}

export default App;
