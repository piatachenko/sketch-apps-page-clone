import Link from "next/link";
import { type CSSProperties } from "react";

interface MoreLinkArticleProps {
  text: string;
  link: string;
  image?: string;
}

export default function MoreLinkArticle({
  text,
  link,
  image,
}: MoreLinkArticleProps) {
  return (
    <>
      <Link
        href={link}
        dangerouslySetInnerHTML={{ __html: text }}
        className={`arrow relative my-auto inline-block text-base font-light leading-[1.5rem] transition-colors duration-[.25s] ease-[cubic-bezier(.455,.03,.515,.955)] before:absolute before:bottom-1/2 before:left-0 before:aspect-square before:w-[--image-width] before:translate-y-1/2 before:rounded-md before:bg-[image:--bg-image] before:bg-contain before:bg-center before:content-[''] hover:text-black/[.64] max-sm:before:translate-y-1/3 sm:pr-10 md:pr-0 md:max-lg:before:translate-y-1/3 lg:pr-10 lg:text-[1.0625rem] xl:pr-28 [&_b]:font-semibold ${
          image ? "pl-[calc(var(--image-width)_+_1.5rem)]" : ""
        }`}
        style={
          {
            "--bg-image": `url(${image ?? ""})`,
            "--image-width": "4rem",
          } as CSSProperties
        }
      ></Link>
    </>
  );
}
