import React from 'react';
import Header from './Header';
import ProductList from './ProductList';

export default function Main() {
  return (
    <div style={{ flex: 1 }}>
      <Header />
      <ProductList />
    </div>
  )
} 
