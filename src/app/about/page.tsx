import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <Badge variant="secondary" className="mb-4">About ATRAV</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our Story of Style & Tradition
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          ATRAV was born from a passion for combining contemporary style with traditional elegance. 
          We specialize in premium handbags and ethnic wear that celebrate the modern woman&apos;s lifestyle.
        </p>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Founded on Quality & Craftsmanship</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Since our inception, ATRAV has been committed to bringing you the finest collection of 
                handbags and ethnic wear. Our journey began with a simple vision: to create products 
                that seamlessly blend traditional craftsmanship with modern design sensibilities.
              </p>
              <p>
                Every piece in our collection is carefully curated and crafted with attention to detail. 
                From premium leather sling bags to elegant salwar suits and kurtas, we ensure that 
                each product meets our high standards of quality and style.
              </p>
              <p>
                Our ethnic wear collection celebrates the rich heritage of Indian fashion while 
                incorporating contemporary cuts and comfortable fits that suit the modern woman&apos;s lifestyle.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 shadow-xl">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e48a5b32-c404-4956-a66c-a4f0ad8a89cf.png"
                alt="ATRAV founder showcasing the brand's commitment to quality and traditional craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30 -mx-4 px-4 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These core values guide everything we do at ATRAV
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quality */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-muted-foreground">
                We source the finest materials and work with skilled craftsmen to ensure every 
                product meets our exacting standards of excellence.
              </p>
            </CardContent>
          </Card>

          {/* Heritage */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultural Heritage</h3>
              <p className="text-muted-foreground">
                Our ethnic wear collection honors traditional Indian craftsmanship while 
                adapting designs for contemporary lifestyles and preferences.
              </p>
            </CardContent>
          </Card>

          {/* Innovation */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our designs and techniques to create products that 
                are both timeless and perfectly suited to today&apos;s fashion-forward woman.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            The passionate people behind ATRAV&apos;s success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5385b3a6-31c9-44d5-8fb9-e63251b2c34e.png"
                  alt="ATRAV Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Priya Sharma</h3>
              <p className="text-primary text-sm mb-3">Founder & CEO</p>
              <p className="text-muted-foreground text-sm">
                With over 15 years in fashion, Priya founded ATRAV to bring premium 
                ethnic wear and accessories to modern women.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 2 */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ca877d51-5ec2-485f-a09d-972cc3bb8454.png"
                  alt="ATRAV Head of Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Anita Gupta</h3>
              <p className="text-primary text-sm mb-3">Head of Design</p>
              <p className="text-muted-foreground text-sm">
                Anita leads our design team, ensuring each collection perfectly balances 
                traditional aesthetics with contemporary functionality.
              </p>
            </CardContent>
          </Card>

          {/* Team Member 3 */}
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 overflow-hidden">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ced084ae-9c60-4909-b8f0-5163ca80bfd7.png"
                  alt="ATRAV Quality Control Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">Rajesh Kumar</h3>
              <p className="text-primary text-sm mb-3">Quality Control Manager</p>
              <p className="text-muted-foreground text-sm">
                Rajesh oversees our quality assurance process, ensuring every product 
                meets ATRAV&apos;s rigorous standards before reaching customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-3">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Every product undergoes rigorous quality checks. We stand behind our craftsmanship 
                and offer comprehensive warranties on all our items.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
              <p className="text-muted-foreground">
                Our dedicated customer service team is here to help with sizing, styling advice, 
                and any questions about your ATRAV purchase.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Sustainable Practices</h3>
              <p className="text-muted-foreground">
                We&apos;re committed to sustainable fashion practices, working with suppliers who 
                share our values of ethical production and environmental responsibility.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously research new materials, techniques, and designs to bring you 
                the latest in fashion while maintaining our commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground -mx-4 px-4 rounded-3xl text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join the ATRAV Family</h2>
          <p className="text-lg opacity-90 mb-6">
            Discover our latest collections and become part of a community that celebrates 
            style, quality, and tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Shop Collection
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}