import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";

export const metadata: Metadata = {
  title: "SUNOKI VIETNAM | 日本品質の設計・施工会社",

  description:
    "SUNOKI VIETNAMは、日本品質の設計・施工をベトナムで提供する建築・内装会社です。住宅・店舗・オフィスの設計から施工までワンストップで対応します。",

  keywords: [
    "SUNOKI",
    "SUNOKI VIETNAM",
    "ベトナム 建築",
    "ベトナム 内装",
    "ホーチミン 内装",
    "日本品質",
    "住宅設計",
    "店舗設計",
    "リフォーム",
  ],

  authors: [
    {
      name: "SUNOKI VIETNAM",
    },
  ],

  openGraph: {
    title: "SUNOKI VIETNAM",
    description: "日本品質の設計・施工会社",
    url: "https://sunoki-vietnam.vercel.app",
    siteName: "SUNOKI VIETNAM",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}