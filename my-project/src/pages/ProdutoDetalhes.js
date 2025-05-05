import React from 'react';
import { useParams } from 'react-router-dom';

function ProdutoDetalhes() {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Detalhes do Produto {id}</h2>
      <p>Informações detalhadas sobre o produto {id}.</p>
    </div>
  );
}

export default ProdutoDetalhes;
