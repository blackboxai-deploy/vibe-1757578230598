"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock cart data - in a real app, this would come from a cart context or state management
const mockCartItems = [
  {
    id: 'hb-001',
    name: 'Elegant Leather Sling Bag',
    price: 2499,
    originalPrice: 3499,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f1e006f1-25e3-4038-bcbc-dac1cfce1c74.png',
    color: 'Black',
    size: 'Medium',
    quantity: 1,
  },
  {
    id: 'ss-001',
    name: 'Elegant Anarkali Suit Set',
    price: 4999,
    originalPrice: 6999,
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/82b0bdcc-888e-4ca3-bdb4-b224ae1db6f5.png',
    color: 'Royal Blue',
    size: 'M',
    quantity: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(mockCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 2000 ? 0 : 99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center">
            <svg className="w-12 h-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Your cart is empty</h1>
          <p className="text-muted-foreground">
            Looks like you haven&apos;t added any items to your cart yet.
          </p>
          <Button asChild>
            <Link href="/products">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>Color: {item.color}</p>
                          {item.size && <p>Size: {item.size}</p>}
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex justify-between items-center">
                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold">₹{item.price.toLocaleString()}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 hover:bg-muted transition-colors"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 hover:bg-muted transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-600">Free</span>
                  ) : (
                    `₹${shipping}`
                  )}
                </span>
              </div>
              
              {shipping === 0 && (
                <p className="text-xs text-green-600">
                  🎉 You qualify for free shipping!
                </p>
              )}
              
              {shipping > 0 && (
                <p className="text-xs text-muted-foreground">
                  Add ₹{(2000 - subtotal).toLocaleString()} more for free shipping
                </p>
              )}

              <hr />
              
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>

              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>

              <Button variant="outline" className="w-full" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>

              {/* Accepted Payment Methods */}
              <div className="pt-4 space-y-2">
                <h4 className="text-sm font-medium">We Accept:</h4>
                <div className="flex gap-2 flex-wrap">
                  <div className="px-2 py-1 bg-muted rounded text-xs">Visa</div>
                  <div className="px-2 py-1 bg-muted rounded text-xs">Mastercard</div>
                  <div className="px-2 py-1 bg-muted rounded text-xs">UPI</div>
                  <div className="px-2 py-1 bg-muted rounded text-xs">Net Banking</div>
                  <div className="px-2 py-1 bg-muted rounded text-xs">COD</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}