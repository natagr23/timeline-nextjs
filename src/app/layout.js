'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import '@aws-amplify/ui-react/styles.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { getMetadata } from './metadata';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const { title } = getMetadata();
  return (
    <html lang="en">
      <body className="App">
        <Head>
          <title>{title.default}</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
