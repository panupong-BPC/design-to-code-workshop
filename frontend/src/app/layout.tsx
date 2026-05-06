import type { Metadata } from "next";
import { Cabin, Mukta } from "next/font/google";
import '../theme/globals.scss';
import { cn } from "@/lib/utils";
import { LanguageProvider } from "@/contexts/language-context";

const cabin = Cabin({
  subsets: ["latin"],
  variable: "--font-cabin",
  weight: ["400", "500", "600", "700"],
});
const mukta = Mukta({
  subsets: ["latin"],
  variable: "--font-mukta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Krungsri One Corporate Portal",
  description: "Banking portal for corporate clients of Krungsri Bank, providing access to financial services and account management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-body antialiased",
          cabin.variable,
          mukta.variable
        )}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
