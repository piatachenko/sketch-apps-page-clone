import { type ReactNode } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="px-4 sm:px-6">
        <div className="mx-auto max-w-[75rem]">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
