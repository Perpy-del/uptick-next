import type { Metadata } from 'next';
import { Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../components/theme-provider';
// import NavBar from '@/components/NavBar';
import { ModeToggle } from '@/components/ModeToggle';
import { Toaster } from '@/components/ui/toaster';
import UptickContextProvider from '@/context/UptickContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: ['100', '300', '400', '500', '700', '900'],
});
export const metadata: Metadata = {
  title: 'Uptick Blog',
  description: 'A simplet blog application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${playfair.variable}`}>
        <UptickContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
            <ModeToggle />
          </ThemeProvider>
        </UptickContextProvider>
      </body>
    </html>
  );
}
