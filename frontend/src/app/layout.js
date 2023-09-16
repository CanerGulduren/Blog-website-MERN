"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "@/app/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sultanım",
  description: "A blog website about birds.",
};

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </Provider>
  );
}
