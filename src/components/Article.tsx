import Image from "next/image";
import ActionLink from "./ActionLink";
import AdditionalArticle from "./AdditionalArticle";
import Badge from "./Badge";
import H3 from "./H3";
import MoreLink from "./MoreLink";
import Paragraph from "./Paragraph";

interface ArticleProps {
  badge?: string;
  header?: string;
  paragraph?: string;
  image?: string;
  mobileImage?: string;
  moreImage?: string;
  more?: { [key: string]: string };
  action?: {};
  additional?: {};
}

export default function Article({
  badge,
  header,
  paragraph,
  image,
  mobileImage,
  more,
  action,
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
        <div className="pl-8 pr-10 pt-14 group-first:translate-y-[-.12rem]">
          {!!badge && (
            <div className="mb-4">
              <Badge>{badge}</Badge>
            </div>
          )}
          {!!header && (
            <div className="mb-2">
              <H3>{header}</H3>
            </div>
          )}
          {!!header && (
            <div className="mb-8">
              <Paragraph>{paragraph}</Paragraph>
            </div>
          )}
          {!!more && (
            <div className="mb-[3.75rem]">
              <MoreLink props={more} />
            </div>
          )}
          {!!action && <div className="mb-[1.6rem]">
            <ActionLink props={action} />
          </div>}
          {!!additional && <AdditionalArticle props={additional} />}
        </div>
      </article>
    </>
  );
}
