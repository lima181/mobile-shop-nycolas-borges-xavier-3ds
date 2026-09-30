import React from 'react';

export function ProductCard({ produto }) {
  return (
    <div className="product-card">
      <div className="product-image">{produto.imagem}</div>
      <span className="product-category">{produto.categoria}</span>
      <h3 className="product-name">{produto.nome}</h3>
      <p className="product-price">R$ {produto.preco.toFixed(2)}</p>
      <button className="buy-button">Comprar</button>
    </div>
  );
}