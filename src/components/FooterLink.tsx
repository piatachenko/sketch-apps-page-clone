import Link from "next/link";
import ArrowSlanted from "./ArrowSlanted";
import Badge from "./Badge";

export default function FooterLink({ link }: any) {
  return (
    <>
      <Link
        href={link[1]}
        className="mb-2 flex items-center text-black/[.64] transition-colors duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:text-black/80 [&_svg]:hover:opacity-80"
      >
        {link[0]}
        {!link[1].startsWith("https://sketch.com/") && <ArrowSlanted />}
        {!!link[2] && (
          <>
            <div className="ml-1.5" />
            <Badge size={"sm"}>{link[2]}</Badge>
          </>
        )}
      </Link>
    </>
  );
}
