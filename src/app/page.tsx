import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/products';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  New Collection 2024
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Discover
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    ATRAV
                  </span>
                  Collection
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                  Premium handbags and elegant ethnic wear crafted with love and attention to detail. 
                  Express your unique style with our curated collection.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/about">Our Story</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4.8★</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3947585b-6f53-4983-aeaf-10501f630bb0.png"
                  alt="ATRAV Fashion Collection - Elegant woman showcasing handbags and ethnic wear"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 hidden md:block">
                <div className="text-sm font-semibold">Premium Quality</div>
                <div className="text-xs text-muted-foreground">Handcrafted Excellence</div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 hidden md:block">
                <div className="text-sm font-semibold">Free Shipping</div>
                <div className="text-xs text-muted-foreground">On orders above ₹2000</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated collections of premium handbags and traditional ethnic wear
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Handbags Category */}
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1b1221ab-68d8-4941-9eec-75ab4df170d9.png"
                    alt="ATRAV Handbags Collection - Premium sling bags and designer handbags"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Handbags</h3>
                    <p className="text-sm opacity-90 mb-4">Premium sling bags & designer collections</p>
                    <Button variant="secondary" asChild>
                      <Link href="/products/handbags">Explore Collection</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ethnic Wear Category */}
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6e0b7b1b-2f0c-4ea1-bc99-9023db635081.png"
                    alt="ATRAV Ethnic Wear Collection - Traditional salwar suits and kurtas"
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Ethnic Wear</h3>
                    <p className="text-sm opacity-90 mb-4">Salwar suits, kurtas & traditional attire</p>
                    <Button variant="secondary" asChild>
                      <Link href="/products/ethnic-wear">Explore Collection</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Handpicked favorites from our latest collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose ATRAV */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose ATRAV</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re committed to bringing you the finest quality products with exceptional service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality Craftsmanship */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Quality Craftsmanship</h3>
              <p className="text-muted-foreground">
                Each product is carefully crafted with attention to detail and premium materials for lasting quality.
              </p>
            </div>

            {/* Fast Shipping */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Fast Shipping</h3>
              <p className="text-muted-foreground">
                Quick and reliable delivery to your doorstep. Free shipping on orders above ₹2000.
              </p>
            </div>

            {/* Customer Support */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Customer Love</h3>
              <p className="text-muted-foreground">
                Dedicated customer support team ready to help you with any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Stay Updated</h2>
            <p className="text-lg opacity-90">
              Subscribe to our newsletter to get the latest updates on new collections, exclusive offers, and fashion tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-foreground bg-background border-0 focus:ring-2 focus:ring-white/20"
              />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}