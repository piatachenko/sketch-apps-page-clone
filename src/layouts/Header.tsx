import { type ReactNode } from "react";

export default function Header({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="mb-10 space-y-[1.55rem] px-6 md:mb-16 xl:mb-24 [&_*]:mx-auto lg:[&_*]:max-w-[40.1875rem] xl:[&_*]:max-w-4xl">
        {children}
      </header>
    </>
  );
}
