import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Eyuel Tefera | Backend/Platform Engineer",
  description:
    "Backend/Platform Engineer specializing in reliable, transaction-heavy distributed systems with strong financial-domain and integration experience.",
  keywords: [
    "Backend Engineer",
    "Platform Engineer",
    "Distributed Systems",
    "Financial Technology",
    "Java",
    "TypeScript",
    "Go",
    "PostgreSQL",
    "Redis",
  ],
  authors: [{ name: "Eyuel Tefera" }],
  openGraph: {
    title: "Eyuel Tefera | Backend/Platform Engineer",
    description:
      "Backend/Platform Engineer specializing in reliable, transaction-heavy distributed systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
