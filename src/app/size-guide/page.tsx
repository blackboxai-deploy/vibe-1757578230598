import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function SizeGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center py-12">
        <Badge variant="secondary" className="mb-4">Size Guide</Badge>
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Fit</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Use our comprehensive size guide to ensure you get the perfect fit for our ethnic wear collection.
        </p>
      </div>

      <Tabs defaultValue="ethnic-wear" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ethnic-wear">Ethnic Wear</TabsTrigger>
          <TabsTrigger value="handbags">Handbags</TabsTrigger>
        </TabsList>

        {/* Ethnic Wear Size Guide */}
        <TabsContent value="ethnic-wear" className="space-y-8">
          {/* Salwar Suits Size Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Salwar Suits & Kurtas Size Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left">Size</th>
                      <th className="border border-border p-3 text-left">Bust (inches)</th>
                      <th className="border border-border p-3 text-left">Waist (inches)</th>
                      <th className="border border-border p-3 text-left">Hips (inches)</th>
                      <th className="border border-border p-3 text-left">Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">S</td>
                      <td className="border border-border p-3">32-34</td>
                      <td className="border border-border p-3">26-28</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">42-44</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">M</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">28-30</td>
                      <td className="border border-border p-3">36-38</td>
                      <td className="border border-border p-3">44-46</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">L</td>
                      <td className="border border-border p-3">36-38</td>
                      <td className="border border-border p-3">30-32</td>
                      <td className="border border-border p-3">38-40</td>
                      <td className="border border-border p-3">46-48</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">XL</td>
                      <td className="border border-border p-3">38-40</td>
                      <td className="border border-border p-3">32-34</td>
                      <td className="border border-border p-3">40-42</td>
                      <td className="border border-border p-3">48-50</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">XXL</td>
                      <td className="border border-border p-3">40-42</td>
                      <td className="border border-border p-3">34-36</td>
                      <td className="border border-border p-3">42-44</td>
                      <td className="border border-border p-3">50-52</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* How to Measure */}
          <Card>
            <CardHeader>
              <CardTitle>How to Measure Yourself</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Bust Measurement</h4>
                  <p className="text-muted-foreground text-sm">
                    Measure around the fullest part of your bust, keeping the tape parallel to the floor.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Waist Measurement</h4>
                  <p className="text-muted-foreground text-sm">
                    Measure around your natural waistline, about 1 inch above your hip bone.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Hip Measurement</h4>
                  <p className="text-muted-foreground text-sm">
                    Measure around the fullest part of your hips, about 7-9 inches below your waistline.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Length Measurement</h4>
                  <p className="text-muted-foreground text-sm">
                    Measure from your shoulder point down to your desired length.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Handbags Size Guide */}
        <TabsContent value="handbags" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Handbag Size Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="aspect-square w-24 h-24 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xs">Small</span>
                  </div>
                  <h4 className="font-semibold mb-2">Small</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Width: 8-10 inches</p>
                    <p>Height: 6-8 inches</p>
                    <p>Depth: 3-4 inches</p>
                    <p className="text-xs mt-2">Perfect for essentials like phone, keys, and cards.</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="aspect-square w-32 h-32 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-sm">Medium</span>
                  </div>
                  <h4 className="font-semibold mb-2">Medium</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Width: 10-12 inches</p>
                    <p>Height: 8-10 inches</p>
                    <p>Depth: 4-5 inches</p>
                    <p className="text-xs mt-2">Great for daily use with space for wallet, makeup, and small items.</p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="aspect-square w-40 h-40 bg-muted rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-base">Large</span>
                  </div>
                  <h4 className="font-semibold mb-2">Large</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>Width: 12-15 inches</p>
                    <p>Height: 10-12 inches</p>
                    <p>Depth: 5-6 inches</p>
                    <p className="text-xs mt-2">Spacious for work essentials, tablets, and everything you need.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Choosing the Right Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Consider Your Lifestyle</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• <strong>Small bags</strong> are perfect for evenings out, parties, and minimal carry needs.</p>
                    <p>• <strong>Medium bags</strong> work great for daily errands, casual outings, and weekend trips.</p>
                    <p>• <strong>Large bags</strong> are ideal for work, travel, and when you need to carry many items.</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Body Proportions</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Petite frames look best with small to medium sized bags.</p>
                    <p>• Taller frames can carry larger bags proportionally well.</p>
                    <p>• Consider where the bag hits on your body for the most flattering look.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Contact for Help */}
      <Card className="max-w-4xl mx-auto mt-12">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Need Help with Sizing?</h3>
          <p className="text-muted-foreground mb-4">
            Our customer service team is here to help you find the perfect fit. 
            Contact us for personalized sizing assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}