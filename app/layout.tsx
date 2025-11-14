import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "OnlyVet — онлайн-ветеринария",
  description: "Онлайн-консультации, второе мнение и сопровождение животных по принципам доказательной медицины.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-cloud text-ink">
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
