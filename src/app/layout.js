'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import '@aws-amplify/ui-react/styles.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    template:
      '%s | Profecias de los ultimos tiempos segun apariciones de la Virgen Maria y revelaciones privadas',
    default:
      'Profecias de los ultimos tiempos segun apariciones de la Virgen Maria y revelaciones privadas', // a default is required when creating a template
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="App">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
