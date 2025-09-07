
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AWLAD MESHREKY GARAGE | Premium Auto Care",
    template: "%s | AWLAD MESHREKY GARAGE",
  },
  description:
    "Professional automotive services in Ajman. We offer a wide range of repair, maintenance, and detailing services with a commitment to quality and customer satisfaction.",
  keywords: ["car repair ajman", "auto maintenance", "car detailing", "automotive services"],
  openGraph: {
    title: "AWLAD MESHREKY GARAGE",
    description: "Your trusted partner for all automotive repairs and maintenance in Ajman.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
