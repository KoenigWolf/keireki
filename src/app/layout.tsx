import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "作田 敏希 | フルスタックエンジニア",
  description:
    "3年以上の開発経験を持つフルスタックエンジニア。React, TypeScript, Node.js。PM/PdM志向。",
  openGraph: {
    title: "作田 敏希 | フルスタックエンジニア",
    description:
      "3年以上の開発経験を持つフルスタックエンジニア。React, TypeScript, Node.js。PM/PdM志向。",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
