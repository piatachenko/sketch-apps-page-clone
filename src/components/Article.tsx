import Image from "next/image";
import Badge from "./Badge";
import H3 from "./H3";
import ParagraphArticle from "./ParagraphArticle";

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
      <article>
        <div className="flex">
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
          <div>
            <Badge>{badge}</Badge>
            <H3>{header}</H3>
            <ParagraphArticle>{paragraph}</ParagraphArticle>
            link link
          </div>
        </div>
      </article>
    </>
  );
}
