import Image from "next/image";
import Badge from "./Badge";
import H3 from "./H3";
import Paragraph from "./Paragraph";

interface ArticleProps {
  badge?: string;
  header?: string;
  paragraph?: string;
  image?: string;
  mobileImage?: string;
  moreImage?: string;
  moreText?: string;
  actionText?: string;
  additional?: {};
}

export default function Article({
  badge,
  header,
  paragraph,
  image,
  mobileImage,
  moreImage,
  moreText,
  actionText,
  additional,
}: ArticleProps) {
  return (
    <>
      <article className="group flex gap-6 border-b border-black/10 last:border-none even:flex-row-reverse">
        {!!image && (
          <Image
            src={image}
            alt={""}
            className="hidden md:block"
            width={1174}
            height={990}
          />
        )}
        {!!mobileImage && (
          <Image
            src={mobileImage}
            alt={""}
            className="block md:hidden"
            width={1000}
            height={585}
          />
        )}
        <div className="space-y-2 pl-8 pt-14 group-first:translate-y-[-.12rem]">
          <Badge>{badge}</Badge>
          <div className="pt-2">
            <H3>{header}</H3>
          </div>
          <div className="pr-10">
            <Paragraph>{paragraph}</Paragraph>
          </div>
          link link
        </div>
      </article>
    </>
  );
}
