import { type ReactNode } from "react";
import FixedLink from "~/components/FixedLink";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <FixedLink/>
      <Navbar />
      <main className="mx-auto max-w-[75rem]">{children}</main>
      <Footer />
    </>
  );
}
