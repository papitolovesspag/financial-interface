import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata = {
  title: "FinCalc - Financial Interface",
  description:
    "A mobile-first financial toolkit for interest, profit, bills, tips, loans, and ROI calculations.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", url: "/icon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
    ],
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
