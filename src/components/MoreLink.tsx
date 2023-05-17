import Link from "next/link";
import { type CSSProperties } from "react";

export default function MoreLink({
  props,
}: {
  props: { [key: string]: string };
}) {
  return (
    <>
      {!!props.link && !!props.text && (
        <a
          href={props.link}
          dangerouslySetInnerHTML={{ __html: props.text }}
          className="relative my-auto inline-block pl-[calc(var(--image-width)_+_1.5rem)] pr-28 text-[1.0625rem] font-light leading-[1.5rem] transition-colors duration-[.25s] ease-[cubic-bezier(.455,.03,.515,.955)] before:absolute before:bottom-1/2 before:left-0 before:aspect-square before:w-[--image-width] before:translate-y-1/2 before:rounded-md before:bg-[image:--bg-image] before:bg-contain before:bg-center before:content-[''] hover:text-black/[.64] [&_b]:font-semibold arrow"
          style={
            {
              "--bg-image": `url(${props.image})`,
              "--image-width": "4rem",
            } as CSSProperties
          }
        ></a>
      )}
    </>
  );
}
