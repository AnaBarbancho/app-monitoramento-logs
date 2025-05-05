import React from 'react';
import { Link } from 'react-router-dom';

function Produtos() {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        <li>
          <Link to="/produto/1">Produto 1</Link>
        </li>
        <li>
          <Link to="/produto/2">Produto 2</Link>
        </li>
      </ul>
    </div>
  );
}

export default Produtos;
