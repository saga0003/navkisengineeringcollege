import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navkis College of Engineering, Hassan | Contemporary Higher Learning",
  description:
    "Navkis College of Engineering, Hassan — a state-of-the-art technical institution offering world-class engineering education. AICTE-approved, VTU-affiliated, UGC-recognised. Programs in CSE, ECE, AI&ML, AI&DS, Civil, MCA.",
  keywords: [
    "Navkis College of Engineering",
    "NCEH Hassan",
    "engineering college Hassan",
    "CSE Hassan",
    "ECE Hassan",
    "AI ML engineering",
    "VTU affiliated college",
    "AICTE approved engineering",
    "best engineering college Karnataka",
    "Navkis admissions",
  ],
  authors: [{ name: "Navkis College of Engineering, Hassan" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Navkis College of Engineering, Hassan",
    description:
      "A state-of-the-art technical institution committed to academic excellence, innovation and holistic development. Established 2009-10.",
    siteName: "Navkis College of Engineering",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navkis College of Engineering, Hassan",
    description:
      "Contemporary higher learning at Navkis College of Engineering, Hassan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} ${jetbrains.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
