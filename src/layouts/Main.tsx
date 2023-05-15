import { type ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[75rem]">{children}</main>
      <Footer />
    </>
  );
}