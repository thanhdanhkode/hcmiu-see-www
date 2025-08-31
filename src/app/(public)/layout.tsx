import { ThemeProvider } from "@/components/ThemeProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-poppins",
});

export default function PublicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className={`${poppins.className} ${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
