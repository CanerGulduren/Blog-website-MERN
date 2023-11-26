"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient()

export const metadata = {
  title: "Sultanım",
  description: "A blog website about birds.",
};

export default function RootLayout({ children }) {
  return (
      <QueryClientProvider client={queryClient} >
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
      </QueryClientProvider>
  );
}
