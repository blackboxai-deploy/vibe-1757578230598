import React from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { getProductsByCategory } from '@/lib/products';

export default function EthnicWearPage() {
  const ethnicWearProducts = getProductsByCategory('ethnic-wear');

  return (
    <ProductGrid 
      products={ethnicWearProducts} 
      title="Ethnic Wear Collection"
      subtitle="Traditional salwar suits, kurtas and ethnic attire for every occasion"
    />
  );
}