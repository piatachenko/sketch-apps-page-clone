import { type ReactNode } from "react";
import Hr from "~/components/Hr";
import SubscribeForm from "~/components/SubscribeForm";
import Footer from "./Footer";
import Navbar from "./Navbar";
import TabButton from "~/components/TabButton";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <>
      <TabButton id="#content">Skip Navigation</TabButton>
      <div className="px-4 sm:px-6 xl:px-8">
        <div className="mx-auto max-w-[75rem] 2xl:max-w-[76rem]">
          <Navbar />
          <main id="content" className="pt-32 lg:pt-[5.85rem]">{children}</main>
          <SubscribeForm />
          <Hr />
          <Footer />
        </div>
      </div>
    </>
  );
}
