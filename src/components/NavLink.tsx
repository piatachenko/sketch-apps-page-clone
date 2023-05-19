import Link from "next/link";

interface NavLinkProps {
  text: string;
  link: string;
}

export default function NavLink({ text, link }: NavLinkProps) {
  return (
    <>
      <Link
        href={link}
        className="p-4 font-medium transition-colors duration-200 hover:text-black/[.48]"
      >
        {text}
      </Link>
    </>
  );
}
