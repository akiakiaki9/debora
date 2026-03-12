import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { CartProvider } from "./context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Debora Ceramica | Премиальная сантехника в Ташкенте",
    template: "%s | Debora Ceramica"
  },
  description: "Премиальная сантехника в Ташкенте с 2006 года. Чугунные ванны, унитазы, смесители Grohe, мебель для ванной. Доставка по Ташкенту, профессиональный монтаж.",
  keywords: [
    "сантехника Ташкент",
    "премиум сантехника",
    "чугунные ванны Ташкент",
    "унитазы купить",
    "смесители Grohe",
    "мебель для ванной",
    "Debora Ceramica",
    "сантехника премиум класс",
    "магазин сантехники Ташкент",
    "ванна чугунная цена"
  ],
  authors: [{ name: "Debora Ceramica" }],
  creator: "Debora Ceramica",
  publisher: "Debora Ceramica",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://deboraceramica.uz'),
  alternates: {
    canonical: '/',
    languages: {
      'ru': '/',
      'uz': '/uz',
    },
  },
  openGraph: {
    title: "Debora Ceramica | Премиальная сантехника в Ташкенте",
    description: "Премиальная сантехника в Ташкенте с 2006 года. Чугунные ванны, унитазы, смесители, мебель для ванной.",
    url: "https://deboraceramica.uz",
    siteName: "Debora Ceramica",
    images: [
      {
        url: "https://deboraceramica.uz/images/logo.png",
        width: 512,
        height: 512,
        alt: "Debora Ceramica - Премиальная сантехника",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Debora Ceramica | Премиальная сантехника в Ташкенте",
    description: "Премиальная сантехника в Ташкенте с 2006 года. Чугунные ванны, унитазы, смесители.",
    images: ["https://deboraceramica.uz/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/images/logo.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  category: 'sanitary ware',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#C5A572',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Структурированные данные для поисковых систем */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "Debora Ceramica",
              "image": "https://deboraceramica.uz/images/logo.png",
              "logo": "https://deboraceramica.uz/images/logo.png",
              "url": "https://deboraceramica.uz",
              "address": {
                "addressLocality": "Ташкент",
                "addressCountry": "UZ"
              },
              "sameAs": [
                "https://t.me/debora_ceramica",
                "https://instagram.com/debora_ceramica",
                "https://www.youtube.com/@debora_ceramica"
              ]
            })
          }}
        />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" // Замените на реальный ID
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}