import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title:"Portal de Viagens",
  description: "No Portal de Viagens você encontra a melhor viagem pelo melhor preço",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" >
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
