export default function H3({ children }: { children: string }) {
  return (
    <>
      <h3 className="text-[1.5rem] font-bold tracking-[-.7px] lg:text-[2rem] lg:leading-[2.5rem]">
        {children}
      </h3>
    </>
  );
}
