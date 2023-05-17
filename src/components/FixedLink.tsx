import Link from "next/link";

export default function FixedLink() {
  return (
    <Link
      href={"https://www.sketch.com/blog/tiny-gems-sketch-improvements-2023/"}
      className="arrow block border-b border-black/10 py-[.6rem] text-center text-[.875rem] font-medium leading-[1.3125rem] tracking-[-.05px] after:translate-y-2 after:scale-[.85] hover:underline"
    >
      Tiny Gems: Some dazzling improvements to Sketch you might have missed
    </Link>
  );
}
