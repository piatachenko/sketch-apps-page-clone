export default function H3({ children }: { children?: string }) {
  return (
    <>
      <h3
        className={
          children
            ? "text-[1.5rem] font-bold tracking-[-.7px] lg:text-[2rem] lg:leading-[2.5rem]"
            : "hidden"
        }
      >
        {children}
      </h3>
    </>
  );
}
