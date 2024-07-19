import type { Metadata } from "next";
import "./globals.css";
import { mont } from "./ui/fonts";
import Navbar from "./ui/navbar";

export const metadata: Metadata = {
  title: "Blog View",
  description: "The blogs app to check latest blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
