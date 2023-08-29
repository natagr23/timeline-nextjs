'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import '@aws-amplify/ui-react/styles.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App">
        <h1>Main Layout</h1>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
