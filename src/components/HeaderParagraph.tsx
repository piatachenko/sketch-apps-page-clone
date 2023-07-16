export default function Paragraph({ children }: { children?: string }) {
  return (
    <>
      <p
        className={
          children
            ? "text-center text-[1.0625rem] font-light leading-[1.5rem] md:max-w-[29.5rem] lg:text-[1.5rem] lg:leading-[2rem] xl:px-[4rem]"
            : "hidden"
        }
      >
        {children}
      </p>
    </>
  );
}
