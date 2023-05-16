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
          className="relative my-auto inline-block pl-[calc(var(--image-width)_+_1.5rem)] pr-28 text-[1.0625rem] font-light leading-[1.5rem] transition-colors duration-[.25s] ease-[cubic-bezier(.455,.03,.515,.955)] before:absolute before:bottom-1/2 before:left-0 before:aspect-square before:w-[--image-width] before:translate-y-1/2 before:rounded-md before:bg-[image:--bg-image] before:bg-contain before:bg-center before:content-[''] after:content-[--arrow-icon] after:leading-[0] after:-mt-96 after:opacity-[.32] after:translate-y-[.4rem] after:inline-block hover:text-black/[.64] [&_b]:font-semibold"
          style={
            {
              "--bg-image": `url(${props.image})`,
              "--image-width": "4rem",
              "--arrow-icon": `url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg' color='%23000'%3E%3Cpath d='m13 8 4 4-4 4m2.5-4h-9' stroke='currentColor' stroke-width='1.5' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            } as CSSProperties
          }
        ></a>
      )}
    </>
  );
}
