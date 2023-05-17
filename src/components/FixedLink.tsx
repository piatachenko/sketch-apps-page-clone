import Link from "next/link";

export default function FixedLink() {
  return (
    <Link
      href={"https://www.sketch.com/blog/tiny-gems-sketch-improvements-2023/"}
      className="block text-center"
    >
      Tiny Gems: Some dazzling improvements to Sketch you might have missed
    </Link>
  );
}
