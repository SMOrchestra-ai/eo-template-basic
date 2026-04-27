import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your MicroSaaS · Powered by EO",
  description:
    "Founded with Entrepreneurs Oasis MENA — your MicroSaaS foundation, ready to ship.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
