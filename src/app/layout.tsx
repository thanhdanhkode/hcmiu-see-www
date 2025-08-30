import type { Metadata } from "next";

import "./base.css";

export const metadata: Metadata = {
  title: {
    default: "SCHOOL OF ELECTRICAL ENGINEERING REWORK CONCEPT",
    template: "%s • SCHOOL OF ELECTRICAL ENGINEERING REWORK CONCEPT",
  },
  description: "",
  applicationName: "SCHOOL OF ELECTRICAL ENGINEERING REWORK CONCEPT",
  authors: [{ name: "thanhdanhkode" }],
  referrer: "origin-when-cross-origin",
  keywords: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
