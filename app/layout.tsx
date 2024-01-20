import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import MainSection from '@/components/MainSection';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beebolt',
  description: 'Building the global operating system for international trade',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='h-full w-full flex items-stretch'>
          <Navbar />
          <MainSection>{children}</MainSection>
        </main>
      </body>
    </html>
  );
}
