import Link from "next/link";

interface ActionLinkProps {
  link: string;
  text: string;
}

export default function ActionLink({
  link,
  text,
}: ActionLinkProps) {
  return (
    <>
      <Link
        href={link}
        className="rounded-md bg-black px-4 py-3.5 font-semibold text-white outline outline-2 hover:bg-black/[.85] focus:outline-black/10"
      >
        {text}
      </Link>
    </>
  );
}
