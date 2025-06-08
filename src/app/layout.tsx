import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/shared/styles/globals.css";
import { ViewBlockDesk } from "@/shared/components/view-block";
import { FilterProvider } from "@/modules/property/presentation/contexts/filter-context";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokami",
  description: "Site de reserva de imóveis",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FilterProvider>
          <main className="block md:hidden">{children}</main>
          <main className="hidden md:block"><ViewBlockDesk/></main>
        </FilterProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
