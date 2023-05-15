export default function H1({ children }: { children?: string }) {
  return (
    <>
      <h1
        className={
          children
            ? "text-center text-[3.5rem] font-black leading-[3.5rem] tracking-[-1px] md:tracking-[-1.5px] lg:text-[4.75rem] lg:leading-[4.75rem]"
            : "hidden"
        }
      >
        {children}
      </h1>
    </>
  );
}
