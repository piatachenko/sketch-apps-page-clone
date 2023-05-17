export default function Paragraph({ children }: { children: string }) {
  return (
    <>
      <p className="text-[1rem] font-light leading-[1.5rem] lg:text-[1.25rem] lg:leading-[1.75rem]">
        {children}
      </p>
    </>
  );
}
