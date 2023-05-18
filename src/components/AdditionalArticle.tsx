import Link from "next/link";

interface AdditionalArticleProps {
  additional: { text: string; link?: string }[];
}

export default function AdditionalArticle({
  additional,
}: AdditionalArticleProps) {
  return (
    <>
      {additional.map(({ text, link }, index) =>
        link ? (
          <span
            key={index}
            className="after:mx-2 after:content-['·'] last:after:hidden"
          >
            <Link
              href={link}
              className="text-[.875rem] font-medium leading-[1.3125rem] transition-colors duration-[.125s] ease-out hover:text-black/[.48]"
            >
              {text}
            </Link>
          </span>
        ) : (
          <div
            key={index}
            className="pt-0.5 text-[.875rem] leading-[1.3125rems] text-black/[.48]"
          >
            {text}
          </div>
        )
      )}
    </>
  );
}
