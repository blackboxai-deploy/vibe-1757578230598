import React from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { getProductsByCategory } from '@/lib/products';

export default function HandbagsPage() {
  const handbagProducts = getProductsByCategory('handbags');

  return (
    <ProductGrid 
      products={handbagProducts} 
      title="Handbags Collection"
      subtitle="Premium sling bags and designer handbags crafted for modern women"
    />
  );
}