import Image, { type StaticImageData } from "next/image";
import ActionLink from "./ActionLink";
import AdditionalArticle from "./AdditionalArticle";
import Badge from "./Badge";
import H3 from "./H3";
import MoreLinkArticle from "./MoreLinkArticle";
import P from "./P";

interface ArticleProps {
  badge?: string;
  header?: string;
  paragraph?: string;
  image?: StaticImageData;
  mobileImage?: {
    src: StaticImageData;
    width?: number;
    height?: number;
  };
  moreImage?: string;
  more?: {
    text: string;
    link: string;
    image?: string;
  };
  action?: {
    text: string;
    link: string;
  };
  additional?: { text: string; link?: string }[];
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
      <article className="group flex gap-3 border-b border-black/10 last:border-none max-md:flex-col-reverse md:even:flex-row-reverse xl:gap-6 md:[&>*]:w-1/2">
        {!!image && (
          <Image
            src={image}
            alt={""}
            className="hidden overflow-visible max-xl:object-cover md:block md:max-xl:group-first:origin-top-left md:max-xl:group-[:nth-child(2)]:origin-bottom-right md:max-xl:group-[:nth-child(3)]:origin-bottom-left md:max-lg:group-first:scale-[.795] md:max-lg:group-first:object-[63%] md:max-lg:group-[:nth-child(2)]:translate-y-[-2.7rem] md:max-lg:group-[:nth-child(2)]:scale-[.9] md:max-lg:group-[:nth-child(2)]:object-[12%] md:max-lg:group-[:nth-child(3)]:object-[107%] lg:max-xl:group-first:scale-[.94] lg:max-xl:group-first:object-[87%_100%] lg:max-xl:group-[:nth-child(2)]:translate-y-[-2.4rem] lg:max-xl:group-[:nth-child(2)]:scale-[.92] lg:max-xl:group-[:nth-child(3)]:scale-[.816] lg:max-xl:group-[:nth-child(2)]:object-[20%] lg:max-xl:group-[:nth-child(3)]:object-[31%] "
            width={1174}
            height={990}
            placeholder="blur"
          />
        )}
        {!!mobileImage && (
          <Image
            src={mobileImage.src}
            alt={""}
            className="block md:hidden"
            width={mobileImage.width ?? 828}
            height={mobileImage.height ?? 585}
            placeholder="blur"
          />
        )}
        <div className="px-5 pb-3 pt-10 group-first:translate-y-[-.12rem] max-md:group-first:pb-2 max-md:group-first:pt-6 max-md:group-[:nth-child(2)]:pb-0 sm:px-6 md:px-5 md:pb-9 md:group-[:nth-child(2)]:pb-7 lg:px-8 lg:py-14 lg:max-xl:group-[:nth-child(2)]:pb-10 xl:pl-8 xl:pr-10">
          {!!badge && (
            <div className="mb-3.5 lg:mb-4">
              <Badge style={"new-york"}>{badge}</Badge>
            </div>
          )}
          {!!header && (
            <div className="mb-0.5 lg:mb-2">
              <H3>{header}</H3>
            </div>
          )}
          {!!paragraph && (
            <div className="mb-8 2xl:mb-9">
              <P>{paragraph}</P>
            </div>
          )}
          {!!more && (
            <div className="mb-12 max-md:sm:mb-14 lg:mb-[3.75rem]">
              <MoreLinkArticle
                text={more.text}
                link={more.link}
                image={more.image}
              />
            </div>
          )}
          {!!action && (
            <div className="mb-[1.4rem] lg:mb-[1.6rem]">
              <ActionLink text={action.text} link={action.link} />
            </div>
          )}
          {!!additional && <AdditionalArticle additional={additional} />}
        </div>
      </article>
    </>
  );
}
