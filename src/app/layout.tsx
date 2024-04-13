import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import Head from "next/head";
import clsx from "clsx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body className={clsx(poppins.className, "bg-black text-white")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
