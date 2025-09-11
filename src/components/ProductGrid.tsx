"use client";

import React, { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { type Product, sortProducts, filterProductsByPrice } from '@/lib/products';

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle?: string;
}

export function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  const [sortBy, setSortBy] = useState<'price-low' | 'price-high' | 'rating' | 'newest'>('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get unique filter options
  const filterOptions = useMemo(() => {
    const colors = [...new Set(products.reduce((acc, p) => [...acc, ...p.colors], [] as string[]))];
    const sizes = [...new Set(products.reduce((acc, p) => [...acc, ...p.sizes], [] as string[]))];
    const subcategories = [...new Set(products.map(p => p.subcategory))];
    const minPrice = Math.min(...products.map(p => p.price));
    const maxPrice = Math.max(...products.map(p => p.price));

    return { colors, sizes, subcategories, minPrice, maxPrice };
  }, [products]);

  // Apply filters and sorting
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Apply price filter
    filtered = filterProductsByPrice(filtered, priceRange[0], priceRange[1]);

    // Apply color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(product =>
        product.colors.some(color => selectedColors.includes(color))
      );
    }

    // Apply size filter
    if (selectedSizes.length > 0) {
      filtered = filtered.filter(product =>
        product.sizes.some(size => selectedSizes.includes(size))
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product =>
        selectedCategories.includes(product.subcategory)
      );
    }

    // Apply sorting
    return sortProducts(filtered, sortBy);
  }, [products, sortBy, priceRange, selectedColors, selectedSizes, selectedCategories]);

  const clearFilters = () => {
    setPriceRange([filterOptions.minPrice, filterOptions.maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategories([]);
  };

  const activeFiltersCount = selectedColors.length + selectedSizes.length + selectedCategories.length;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        )}
        <div className="mt-4 text-sm text-muted-foreground">
          Showing {filteredAndSortedProducts.length} of {products.length} products
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar
            colors={filterOptions.colors}
            sizes={filterOptions.sizes}
            subcategories={filterOptions.subcategories}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
            selectedSizes={selectedSizes}
            setSelectedSizes={setSelectedSizes}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            minPrice={filterOptions.minPrice}
            maxPrice={filterOptions.maxPrice}
            onClearFilters={clearFilters}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="relative">
                    <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
                    </svg>
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <div className="mt-6">
                    <FilterSidebar
                      colors={filterOptions.colors}
                      sizes={filterOptions.sizes}
                      subcategories={filterOptions.subcategories}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      selectedColors={selectedColors}
                      setSelectedColors={setSelectedColors}
                      selectedSizes={selectedSizes}
                      setSelectedSizes={setSelectedSizes}
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                      minPrice={filterOptions.minPrice}
                      maxPrice={filterOptions.maxPrice}
                      onClearFilters={clearFilters}
                    />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort by:</span>
              <Select value={sortBy} onValueChange={(value: any) => setSortBy(value)}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {selectedColors.map(color => (
                  <Button
                    key={color}
                    variant="secondary"
                    size="sm"
                    className="text-xs h-6"
                    onClick={() => setSelectedColors(prev => prev.filter(c => c !== color))}
                  >
                    {color}
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                ))}
                {selectedSizes.map(size => (
                  <Button
                    key={size}
                    variant="secondary"
                    size="sm"
                    className="text-xs h-6"
                    onClick={() => setSelectedSizes(prev => prev.filter(s => s !== size))}
                  >
                    {size}
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                ))}
                {selectedCategories.map(category => (
                  <Button
                    key={category}
                    variant="secondary"
                    size="sm"
                    className="text-xs h-6"
                    onClick={() => setSelectedCategories(prev => prev.filter(c => c !== category))}
                  >
                    {category}
                    <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs h-6"
                  onClick={clearFilters}
                >
                  Clear all
                </Button>
              </div>
            </div>
          )}

          {/* Product Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-muted-foreground mb-4">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or search criteria
              </p>
              <Button onClick={clearFilters}>Clear filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}