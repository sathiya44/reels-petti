import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Reels Petti - Professional Video Production",
  description:
    "Professional video production services for reels, commercials, and creative content",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.className, "min-h-dvh antialiased")}>
        {children}
      </body>
    </html>
  );
}
