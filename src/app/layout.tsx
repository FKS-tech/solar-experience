import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solar Experience | Energia solar inteligente",
  description:
    "Landing page fictícia para geração de leads em projetos fotovoltaicos residenciais, comerciais, rurais e condomínios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-white font-sans text-slate-950">
        {children}
      </body>
    </html>
  );
}
