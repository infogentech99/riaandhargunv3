import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://invitearc-template1.vercel.app/"),

  openGraph: {
    title: "Hargun Weds Ria - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    url: "https://invitearc-template1.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hargun Weds Ria Invitation",
      },
    ],
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Hargun Weds Ria - InviteArc",
    description: "Premium wedding invitation templates by InviteArc",
    images: ["/og.png"],
  },

 other: {
    "og:image:secure_url": "https://invitearc-template1.vercel.app/og.png",
    "og:image:type": "image/png",
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
        {children}
      </body>
    </html>
  );
}