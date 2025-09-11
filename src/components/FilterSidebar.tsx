"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';

interface FilterSidebarProps {
  colors: string[];
  sizes: string[];
  subcategories: string[];
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  selectedSizes: string[];
  setSelectedSizes: (sizes: string[]) => void;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  minPrice: number;
  maxPrice: number;
  onClearFilters: () => void;
}

export function FilterSidebar({
  colors,
  sizes,
  subcategories,
  priceRange,
  setPriceRange,
  selectedColors,
  setSelectedColors,
  selectedSizes,
  setSelectedSizes,
  selectedCategories,
  setSelectedCategories,
  minPrice,
  maxPrice,
  onClearFilters,
}: FilterSidebarProps) {
  const handleColorChange = (color: string, checked: boolean) => {
    if (checked) {
      setSelectedColors([...selectedColors, color]);
    } else {
      setSelectedColors(selectedColors.filter(c => c !== color));
    }
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    if (checked) {
      setSelectedSizes([...selectedSizes, size]);
    } else {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    }
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const getColorStyle = (color: string) => {
    const colorMap: Record<string, string> = {
      'white': '#ffffff',
      'black': '#000000',
      'brown': '#8B4513',
      'tan': '#D2B48C',
      'beige': '#F5F5DC',
      'navy': '#000080',
      'olive': '#808000',
      'burgundy': '#800020',
      'royal blue': '#4169E1',
      'maroon': '#800000',
      'emerald': '#50C878',
      'pink': '#FFC0CB',
      'cream': '#FFFDD0',
      'mint': '#98FB98',
      'peach': '#FFCBA4',
      'lavender': '#E6E6FA',
      'coral': '#FF7F50',
      'turquoise': '#40E0D0',
      'yellow': '#FFFF00',
      'purple': '#800080',
      'magenta': '#FF00FF',
      'gold': '#FFD700',
      'green': '#008000',
      'light blue': '#ADD8E6',
    };
    return colorMap[color.toLowerCase()] || '#9CA3AF';
  };

  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={onClearFilters}>
          Clear All
        </Button>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <h3 className="font-medium">Price Range</h3>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
            min={minPrice}
            max={maxPrice}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Categories */}
      {subcategories.length > 0 && (
        <>
          <div className="space-y-4">
            <h3 className="font-medium">Category</h3>
            <div className="space-y-3">
              {subcategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
                  />
                  <Label
                    htmlFor={`category-${category}`}
                    className="text-sm capitalize cursor-pointer"
                  >
                    {category.replace('-', ' ')}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <Separator />
        </>
      )}

      {/* Colors */}
      {colors.length > 0 && (
        <>
          <div className="space-y-4">
            <h3 className="font-medium">Colors</h3>
            <div className="space-y-3">
              {colors.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox
                    id={`color-${color}`}
                    checked={selectedColors.includes(color)}
                    onCheckedChange={(checked) => handleColorChange(color, !!checked)}
                  />
                  <div
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: getColorStyle(color) }}
                  />
                  <Label
                    htmlFor={`color-${color}`}
                    className="text-sm cursor-pointer"
                  >
                    {color}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <Separator />
        </>
      )}

      {/* Sizes */}
      {sizes.length > 0 && (
        <>
          <div className="space-y-4">
            <h3 className="font-medium">Sizes</h3>
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <Label
                  key={size}
                  htmlFor={`size-${size}`}
                  className="relative"
                >
                  <Checkbox
                    id={`size-${size}`}
                    checked={selectedSizes.includes(size)}
                    onCheckedChange={(checked) => handleSizeChange(size, !!checked)}
                    className="sr-only"
                  />
                  <div
                    className={`
                      border rounded text-center py-2 px-1 text-xs cursor-pointer transition-colors
                      ${selectedSizes.includes(size)
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'border-border hover:bg-muted'
                      }
                    `}
                  >
                    {size}
                  </div>
                </Label>
              ))}
            </div>
          </div>
          <Separator />
        </>
      )}

      {/* Stock Status */}
      <div className="space-y-4">
        <h3 className="font-medium">Availability</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="text-sm cursor-pointer">
              In Stock Only
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="on-sale" />
            <Label htmlFor="on-sale" className="text-sm cursor-pointer">
              On Sale
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}