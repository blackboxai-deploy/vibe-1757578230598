"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { type Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          {/* Product Image */}
          <div className="aspect-square bg-muted">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {discountPercentage && (
              <Badge variant="destructive" className="text-xs">
                {discountPercentage}% OFF
              </Badge>
            )}
            {product.featured && (
              <Badge variant="secondary" className="text-xs">
                Featured
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="outline" className="text-xs bg-background">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Implement wishlist functionality
            }}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Button>
        </div>

        <CardContent className="p-4">
          {/* Category */}
          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
            {product.category === 'handbags' ? 'Handbag' : 'Ethnic Wear'}
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              <span className="text-sm font-medium">{product.rating}</span>
              <svg className="w-3 h-3 text-yellow-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Colors Available */}
          {product.colors.length > 0 && (
            <div className="mt-2">
              <div className="text-xs text-muted-foreground mb-1">
                {product.colors.length} color{product.colors.length > 1 ? 's' : ''}
              </div>
              <div className="flex gap-1">
                {product.colors.slice(0, 4).map((color, index) => (
                  <div
                    key={index}
                    className="w-3 h-3 rounded-full border border-border"
                    style={{
                      backgroundColor: color.toLowerCase() === 'white' ? '#ffffff' :
                                     color.toLowerCase() === 'black' ? '#000000' :
                                     color.toLowerCase() === 'brown' ? '#8B4513' :
                                     color.toLowerCase() === 'tan' ? '#D2B48C' :
                                     color.toLowerCase() === 'beige' ? '#F5F5DC' :
                                     color.toLowerCase() === 'navy' ? '#000080' :
                                     color.toLowerCase() === 'olive' ? '#808000' :
                                     color.toLowerCase() === 'burgundy' ? '#800020' :
                                     color.toLowerCase() === 'royal blue' ? '#4169E1' :
                                     color.toLowerCase() === 'maroon' ? '#800000' :
                                     color.toLowerCase() === 'emerald' ? '#50C878' :
                                     color.toLowerCase() === 'pink' ? '#FFC0CB' :
                                     color.toLowerCase() === 'cream' ? '#FFFDD0' :
                                     color.toLowerCase() === 'mint' ? '#98FB98' :
                                     color.toLowerCase() === 'peach' ? '#FFCBA4' :
                                     color.toLowerCase() === 'lavender' ? '#E6E6FA' :
                                     color.toLowerCase() === 'coral' ? '#FF7F50' :
                                     color.toLowerCase() === 'turquoise' ? '#40E0D0' :
                                     color.toLowerCase() === 'yellow' ? '#FFFF00' :
                                     color.toLowerCase() === 'purple' ? '#800080' :
                                     color.toLowerCase() === 'magenta' ? '#FF00FF' :
                                     color.toLowerCase() === 'gold' ? '#FFD700' :
                                     color.toLowerCase() === 'green' ? '#008000' :
                                     color.toLowerCase() === 'light blue' ? '#ADD8E6' :
                                     '#9CA3AF'
                    }}
                    title={color}
                  />
                ))}
                {product.colors.length > 4 && (
                  <div className="text-xs text-muted-foreground">
                    +{product.colors.length - 4}
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          disabled={!product.inStock}
          onClick={(e) => {
            e.preventDefault();
            // TODO: Implement add to cart functionality
            console.log('Add to cart:', product.id);
          }}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  );
}