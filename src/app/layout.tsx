import type { Metadata } from "next";
import { DM_Serif_Display, Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Education Services (GES) | Premium Education Group Oman",
  description:
    "Global Education Services LLC (GES Quality Education) is Oman's premier private education management group, operating Al Shomoukh International Private School and Shomoukh Early Childhood Education Centers in Muscat.",
  keywords: [
    "GES Oman",
    "Global Education Services",
    "Al Shomoukh International Private School",
    "Shomoukh Early Childhood Education",
    "British curriculum school Muscat",
    "EYFS nursery Muscat",
    "Education group Oman",
    "Oman Vision 2040 Education",
  ],
  openGraph: {
    title: "Global Education Services (GES) | Shaping Futures Through Quality Education",
    description:
      "A distinguished community of learning environments in the Sultanate of Oman dedicated to academic excellence, early childhood foundation, and holistic development.",
    url: "https://ges.om",
    siteName: "Global Education Services Oman",
    locale: "en_OM",
    type: "website",
  },
};

import ClientWrapper from "@/components/ClientWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${inter.variable} ${notoArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F6F2] text-[#102D46] selection:bg-[#C6A477] selection:text-white">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
