import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "ZED's Kitchen Café | Coffee, Comfort & Conversations",
  description: "Step into ZED's Kitchen Café online. Enjoy specialty coffee, comforting meals, cozy workspaces, and friendly dining across Karachi.",
  keywords: "cafe, coffee shop, Karachi, DHA Phase 6, Clifton, workspace, meeting, food delivery, reserve table",
  authors: [{ name: "ZED's Kitchen Cafe" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased selection:bg-gold selection:text-espresso">
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans">
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full relative">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
