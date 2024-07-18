import type { Metadata } from 'next';

import { Manrope } from 'next/font/google';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

import { Suspense } from 'react';

import './globals.css';

const lato = Manrope({ subsets: ['latin'], weight: ['400','600', '700', '800'] });

export const metadata: Metadata = {
  title: 'Padaria vo Rosa',
  description: 'Padaria e Conveniência vo rosa',
  keywords: 'Padaria, Panificadora, Confeitaria, Pão fresco, Doces, Salgados, Bolos, Tortas, Lanches, Café da manhã',
  icons: 'img/padaria-vo-rosa.svg',
  robots: 'index, follow',
  authors: [{ name: 'Eliel Silva', url: 'https://github.com/Eliel-Silva-dev' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={lato.className}>
        <NavBar />
        <Suspense fallback={<div>Carregando dados da pagina...</div>}>
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
