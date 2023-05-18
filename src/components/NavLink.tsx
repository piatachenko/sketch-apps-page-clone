import Link from "next/link";

interface NavLinkProps {
  text: string;
  link: string;
}

export default function NavLink({ text, link }: NavLinkProps) {
  return (
    <>
      <Link href={link}>{text}</Link>
    </>
  );
}
