import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maiven | AI Websites, Chatbots & Automation for Small Businesses",
  description: "Maiven builds AI-powered websites, chatbots, voice agents, and business automation for small businesses in NJ. Not just a web company — a full AI partner.",
  openGraph: {
    title: "Maiven — AI Built for Your Business",
    description: "We don't just build websites. We study your business and deploy AI that saves you time, captures more leads, and grows your revenue — automatically.",
    url: "https://maiven.com",
    siteName: "Maiven",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Maiven — AI Built for Your Business" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maiven — AI Built for Your Business",
    description: "AI-powered websites, chatbots, voice agents, and automation for small businesses.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Maiven",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07082D",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Maiven",
              description: "AI-powered websites, chatbots, voice agents, and business automation for small businesses.",
              url: "https://maiven.com",
              telephone: "347-263-0254",
              email: "info@mavinai.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1001 NJ 70",
                addressLocality: "Toms River",
                addressRegion: "NJ",
                postalCode: "08701",
                addressCountry: "US",
              },
              areaServed: "NJ",
              serviceType: ["Website Design", "AI Chatbots", "Business Automation", "Voice Agents", "Custom Software"],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#07082D] text-white">
        {children}
      </body>
    </html>
  );
}
