import type { Metadata } from "next";
import { Cal_Sans, Manrope } from "next/font/google";
import "./globals.css";

const calSans = Cal_Sans({
  variable: "--font-cal-sans",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mudra Vichare — Service Designer",
    template: "%s — Mudra Vichare",
  },
  description:
    "Mudra Vichare is a service designer solving problems and building cool things.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${calSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
