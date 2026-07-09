import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://sunoki-vietnam.vercel.app"),

  title: {
    default: "SUNOKI VIETNAM | 日本品質の設計・施工会社",
    template: "%s | SUNOKI VIETNAM",
  },

  description:
    "SUNOKI VIETNAMは、日本品質の設計・施工をベトナムで提供する建築・内装会社です。住宅・店舗・オフィス・リフォーム・家具・和空間までワンストップで対応します。",

  keywords: [
    "SUNOKI",
    "SUNOKI VIETNAM",
    "ベトナム 建築",
    "ベトナム 内装",
    "ホーチミン 建築",
    "ホーチミン 内装",
    "日本品質",
    "住宅設計",
    "店舗設計",
    "オフィス設計",
    "リフォーム",
    "家具",
    "和室",
    "日本庭園",
    "ホーチミン リフォーム",
"ベトナム リフォーム",
"日本建築",
"Japanese Interior",
"Japanese Renovation",
"Ho Chi Minh Interior",
  ],

  authors: [
    {
      name: "SUNOKI VIETNAM",
    },
  ],

  creator: "SUNOKI VIETNAM",

  publisher: "SUNOKI VIETNAM",

  robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
  },
},

  alternates: {
    canonical: "https://sunoki-vietnam.vercel.app",
  },

  openGraph: {
    title: "SUNOKI VIETNAM | 日本品質の設計・施工会社",
    description:
      "住宅・店舗・オフィス・リフォーム・家具まで、日本品質の空間づくりをベトナムで。",
    url: "https://sunoki-vietnam.vercel.app",
    siteName: "SUNOKI VIETNAM",
    locale: "vi_VN",
    type: "website",

    images: [
  {
    url: "/images/ogp-v2.png",
    width: 1200,
    height: 630,
    alt: "SUNOKI VIETNAM",
  },
],
  },

  twitter: {
    card: "summary_large_image",
    title: "SUNOKI VIETNAM",
    description:
      "日本品質の住宅・店舗・オフィス設計施工",
    images: ["/images/ogp-v2.png"],
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