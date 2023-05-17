import { type ReactNode } from "react";
import FixedLink from "~/components/FixedLink";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <FixedLink/>
      <div className="mx-auto max-w-[75rem]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
