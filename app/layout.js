import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata = {
  title: "FinCalc - Financial Interface",
  description:
    "A mobile-first financial toolkit for interest, profit, bills, tips, loans, and ROI calculations.",
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
