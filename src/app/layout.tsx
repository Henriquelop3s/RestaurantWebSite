import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import FloatingElements from "@/components/FloatingElements";
import PreventPullRefresh from "@/components/PreventPullRefresh";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sabores Portugal - Tradição e Sabor",
  description: "Descubra uma experiência gastronómica única com pratos tradicionais portugueses preparados com ingredientes frescos e muito amor. Faça o seu pedido pelo WhatsApp!",
  keywords: "restaurante, comida, entrega, cardápio, gastronomia, Lisboa, Portugal",
  authors: [{ name: "Sabores Portugal" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
  openGraph: {
    title: "Sabores Portugal - Tradição e Sabor",
    description: "Descubra uma experiência gastronómica única com pratos tradicionais portugueses preparados com ingredientes frescos e muito amor.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PreventPullRefresh />
        <FloatingElements />
        <Header />
        <main className="pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
