import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h2>Sua loja definitiva de tecnologia!</h2>
        <p>Confira nossos lançamentos e ofertas imperdíveis abaixo.</p>
      </section>

      <section className="products-grid">
        {products.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </section>
    </main>
  );
}