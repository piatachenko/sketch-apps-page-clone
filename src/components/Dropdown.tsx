import Link from "next/link";
import { useState, type CSSProperties } from "react";
import ArrowSlanted from "../icons/ArrowSlanted";

type LinkData = string | { link: string; date?: string; stripe?: string };

interface DropdownProps {
  title: string;
  dropdown: {
    stripe?: string;
    title: string | { title: Record<string, LinkData> };
  };
}

export default function Dropdown({ title, dropdown }: DropdownProps) {
  const [stripe, setStripe] = useState(dropdown.stripe);
  function filterLinks(data: any): [string, Record<string, LinkData>][] {
    const keys = Object.keys(data).filter((k) => k !== "stripe");
    return keys.map((key) => [key, data[key]]);
  }

  const isLinkWithData = (
    data: LinkData
  ): data is {
    link: string;
    date?: string;
    stripe?: string;
    text?: string;
  } => {
    return typeof data !== "string";
  };

  return (
    <>
      <div
        className="group relative block border-black/[.08] max-lg:py-4 lg:inline-block [&:not(:last-child)]:max-lg:border-b max-lg:[&>*]:px-2"
        tabIndex={0}
      >
        <div>
          <div
            className={`pb-1 pr-3 pt-[.625rem] font-semibold transition-colors duration-200 max-lg:text-[.6875rem] max-lg:uppercase max-lg:leading-[1rem] max-lg:text-black/[.48] lg:inline lg:cursor-pointer lg:p-4 lg:pb-2 lg:pl-4 lg:font-medium lg:hover:text-black/[.48] ${
              title === "Learn" && "max-lg:hidden"
            }`}
          >
            {title}
            <svg
              className="ml-1 hidden translate-y-[-.0375rem] opacity-[.32] lg:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              stroke="#000"
            >
              <polyline
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                points="3.75 6 8 10.25 12.249 6.001"
              ></polyline>
            </svg>
          </div>
        </div>
        <div className="left-0 top-9 z-10 rounded-xl transition-all duration-[.3s] ease-[cubic-bezier(.19,1,.22,1)] lg:pointer-events-none lg:absolute lg:flex lg:translate-y-[-5px] lg:overflow-hidden lg:border lg:border-black/[.08] lg:bg-white lg:opacity-0 lg:shadow-md lg:group-focus-within:pointer-events-auto lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100 lg:group-hover:pointer-events-auto lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-[:not(:hover)]:duration-0">
          {!!stripe && (
            <div
              className="w-[--w]"
              style={{ "--w": "2.5rem" } as CSSProperties}
            >
              <div
                className="absolute h-full w-[--w] bg-[image:--stripe] bg-cover transition-all duration-[80ms] max-lg:hidden"
                style={{ "--stripe": `url('${stripe}')` } as CSSProperties}
              />
            </div>
          )}
          {filterLinks(dropdown).map(([title, links], index) => (
            <div
              key={index}
              className={`border-black/[.08] lg:w-[16.5625rem] lg:pb-1.5 lg:pt-2 lg:[&:not(:last-child)]:border-r ${
                links.more && "max-lg:hidden"
              }`}
            >
              <div
                className={`inline-block pb-2 pr-3 text-[.6875rem] font-semibold uppercase leading-[1rem] text-black/[.48] lg:pl-4 lg:pt-[.625rem] [&:empty]:inline [&:empty]:p-0 ${
                  title === "More" &&
                  "max-lg:invisible max-lg:before:visible max-lg:before:content-['Learn'] "
                }`}
              >
                {title}
              </div>
              <div>
                {Object.entries(links).map(([title, props], index) => (
                  <div key={index} className="relative block lg:px-2">
                    <Link
                      className={`inline-block items-center rounded-md py-[.375rem] text-[.9375rem] leading-[1.25rem] max-lg:text-base lg:flex lg:px-3 lg:py-[.625rem] lg:hover:bg-[#F5F5F5] ${
                        title === "more"
                          ? "mt-3 justify-center after:absolute after:inset-x-0 after:top-[-0.375rem] after:block after:h-[.5px] after:bg-black/[.08] after:content-['']"
                          : "justify-between whitespace-nowrap [&:hover>span]:inline-block"
                      }`}
                      href={typeof props === "string" ? props : props.link}
                      onMouseOver={() => {
                        if (isLinkWithData(props)) {
                          setStripe(props.stripe ?? dropdown.stripe);
                        }
                      }}
                      onMouseOut={() => setStripe(dropdown.stripe)}
                    >
                      {title === "more" ? (
                        <span className="inline-block text-center">
                          {isLinkWithData(props) && props.text}
                        </span>
                      ) : (
                        <>
                          <span
                            className={`relative lg:text-ellipsis ${
                              isLinkWithData(props) &&
                              props.date &&
                              "lg:overflow-hidden"
                            }`}
                          >
                            <span>
                              {title}
                              <span className="absolute bottom-1/2 left-full translate-y-1/2">
                                {!(
                                  typeof props === "string" ? props : props.link
                                ).startsWith("https://sketch.com/") && (
                                  <ArrowSlanted />
                                )}
                              </span>
                            </span>
                          </span>
                          {isLinkWithData(props) && props.date && (
                            <span className="text-[.6875rem] font-semibold leading-[1rem] text-black/[.48] lg:hidden lg:pl-5">
                              {props.date}
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
