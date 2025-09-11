import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ATRAV - Premium Handbags & Ethnic Wear",
  description: "Discover ATRAV's exquisite collection of sling handbags and traditional women's ethnic wear including salwar suits and kurtas. Quality craftsmanship meets modern style.",
  keywords: "handbags, sling bags, ethnic wear, salwar suits, kurtas, women's fashion, traditional wear, ATRAV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}