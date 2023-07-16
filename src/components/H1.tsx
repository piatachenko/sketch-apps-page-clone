export default function H1({ children }: { children: string }) {
  return (
    <>
      <h1 className="text-center text-[2.75rem] font-black leading-[3rem] tracking-[-1px] md:text-[3.5rem] md:leading-[3.5rem] md:tracking-[-1.5px] xl:text-[4.75rem] xl:leading-[4.75rem]">
        {children}
      </h1>
    </>
  );
}
