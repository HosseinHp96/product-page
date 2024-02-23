import { Inter } from "next/font/google";
import { AppWrapper } from "@/context/state";
import "@/styles/index.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Paga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
