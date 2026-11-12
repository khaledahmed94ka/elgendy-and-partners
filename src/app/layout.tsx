import type { Metadata } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "الجندي للمحاماة والاستشارات القانونية | El Gendy & Partners",
  description:
    "مكتب الجندي للمحاماة والاستشارات القانونية - متخصصون في قانون الشركات وتأسيس الشركات، سوق المال، المنازعات التجارية، والمحاكم الاقتصادية والجنائية والمدنية.",
  keywords: [
    "محامي شركات",
    "تأسيس شركات في مصر",
    "قانون سوق المال",
    "المحاكم الاقتصادية",
    "الجندي للمحاماة",
    "El Gendy and Partners",
    "استشارات قانونية الجيزة",
  ],
  openGraph: {
    title: "الجندي للمحاماة والاستشارات القانونية | El Gendy & Partners",
    description:
      "حلول قانونية متكاملة للشركات والاستثمار والمنازعات التجارية والجنائية.",
    url: "https://elgendyandpartners.com",
    siteName: "El Gendy & Partners",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={}>
      <body className="min-h-screen flex flex-col bg-[#fdfbf7] text-[#0e2047] antialiased selection:bg-[#c29a93] selection:text-white">
        {children}
      </body>
    </html>
  );
}
