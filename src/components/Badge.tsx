export default function Badge({ children }: { children: string }) {
  return (
    <>
      <div className="inline-block rounded-md bg-[#EAE8E7] px-2 pb-[.175rem] pt-1 text-[.6875rem] font-medium uppercase text-[#464545]">
        {children}
      </div>
    </>
  );
}
