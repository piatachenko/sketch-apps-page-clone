import Link from "next/link";

export default function TabButton({
  id,
  children,
}: {
  id: string;
  children: string;
}) {
  function handleClick() {
    (
      document.querySelector(
        `${id} :is(a,button,input,textarea,area,iframe,object,select,[tabindex]):not([tabindex='-1'])`
      ) as HTMLElement
    ).focus();
  }
  return (
    <Link
      href={id}
      onClick={handleClick}
      className="pointer-events-none fixed left-4 top-4 z-[51] block rounded-md border-2 border-black bg-white px-4 py-3 font-medium leading-5 text-black opacity-0 outline-none ring ring-black/10 focus:pointer-events-auto focus:opacity-100"
    >
      {children}
    </Link>
  );
}
