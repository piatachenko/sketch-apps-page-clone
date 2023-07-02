export default function Badge({
  children,
  style,
  size,
}: {
  children: string;
  style?: string;
  size?: string;
}) {
  return (
    <>
      <div
        className={`inline-block bg-[#EAE8E7] text-[.6875rem] uppercase text-black/[.64] ${
          style === "new-york" ? "rounded-md" : "rounded-full"
        } ${size === "sm" ? "py-[.1875rem] px-[.375rem] leading-[.75rem]" : "px-2 pb-[.175rem] pt-1 font-medium"}`}
      >
        {children}
      </div>
    </>
  );
}
