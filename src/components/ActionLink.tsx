import Link from "next/link";

interface ActionLinkProps {
  text: string;
  link: string;
}

export default function ActionLink({ text, link }: ActionLinkProps) {
  return (
    <>
      <Link
        href={link}
        className="rounded-md bg-black p-3 font-semibold text-white outline outline-2 hover:bg-black/[.85] focus:outline-black/10 max-lg:text-sm lg:px-[0.9rem] lg:py-3.5"
      >
        {text}
      </Link>
    </>
  );
}
