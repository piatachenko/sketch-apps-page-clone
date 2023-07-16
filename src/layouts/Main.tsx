import { type ReactNode } from "react";
import Hr from "~/components/Hr";
import SubscribeForm from "~/components/SubscribeForm";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="px-4 sm:px-6 xl:px-8">
        <div className="mx-auto max-w-[75rem] 2xl:max-w-[76rem]">
          <Navbar />
          <main>{children}</main>
          <SubscribeForm />
          <Hr />
          <Footer />
        </div>
      </div>
    </>
  );
}
