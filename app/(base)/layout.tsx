'use client';

import Cursor from '@/components/Cursor';
import HeaderBar from '@/components/core/HeaderBar';
import { TooltipProvider } from '@/components/ui/tooltip';
import client from '@/lib/(graphql)/ApolloClient';
import ActiveSectionContextProvider from '@/lib/context/ActiveSectionContext';
import ThemeContextProvider from '@/lib/context/ThemeContext';
import '@/styles/styles.scss';
import { ApolloProvider } from '@apollo/client';
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { __DEV__ } from '@apollo/client/utilities/globals';
import { Analytics } from '@vercel/analytics/react';
import { Libre_Baskerville } from 'next/font/google';
import { Toaster } from 'sonner';

const serif = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function RootLayout({

  children,
}: {
  children: React.ReactNode;
}) {

  if (__DEV__) {
    loadDevMessages();
    loadErrorMessages();
  }

  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <TooltipProvider>
            <html className="dark text-foreground bg-background" lang="en">
              <body className="dark-background pb-20 min-h-screen flex">
                <Cursor />
                <span className='absolute top-0 right-0 bg-gradient-to-r from-green-400 to-[##0E0E0E]'></span>
                <main className="mx-auto pt-8 px-6">
                  <div className="contained">
                    <HeaderBar />
                    {children}
                  </div>
                </main>
                <Toaster />
                <Analytics />
              </body>
            </html>
          </TooltipProvider>
        </ActiveSectionContextProvider >
      </ThemeContextProvider>
    </ApolloProvider>
  );
}
