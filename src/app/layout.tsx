import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import EasterEggManager from '@/components/EasterEggs/EasterEggManager';
import Providers from '@/components/Providers';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Fırat Engin - Portfolio',
  description: 'Fırat Engin\'in kişisel portfolyo sitesi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased bg-white dark:bg-gray-900`}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex flex-col min-h-screen text-gray-900 dark:text-gray-100">
              <Header />
              <main className="flex-grow pt-16">{children}</main>
              <Footer />
              <EasterEggManager />
              <Toaster position="bottom-right" />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
