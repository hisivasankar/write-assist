import Header from "@/ui/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { TailwindIndicator } from "@/ui/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Write Assist",
  description:
    "Preparing for exams like IELTS, TOFEL and struggling to score better in the writing section? Practice now and read from hunders letters, essays",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " max-h-screen text-lg"}>
        <Header />
        {children}
        <TailwindIndicator />
      </body>
    </html>
  );
}
