import Link from "next/link";
import { useState, type CSSProperties } from "react";

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

  return (
    <>
      <span className="group relative inline-block">
        <span>
          <span className="cursor-pointer p-4 font-medium transition-colors duration-200 hover:text-black/[.48]">
            {title}
            <svg
              className="ml-1 inline-block translate-y-[-.0375rem] opacity-[.32]"
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
          </span>
        </span>
        <span className="absolute left-0 top-9 hidden overflow-hidden rounded-xl border border-black/[.08] bg-white shadow-md group-hover:flex">
          {!!stripe && (
            <span
              className="w-[--w]"
              style={{ "--w": "2.5rem" } as CSSProperties}
            >
              <span
                className="absolute h-full w-[--w] bg-[image:--stripe] bg-cover transition-all duration-[80ms]"
                style={{ "--stripe": `url('${stripe}')` } as CSSProperties}
              />
            </span>
          )}
          {filterLinks(dropdown).map(([title, links], index) => (
            <span
              key={index}
              className="w-[16.5625rem] border-black/[.08] pb-1.5 pt-2 [&:not(:last-child)]:border-r"
            >
              <span className="inline-block pb-[.5rem] pl-4 pr-3 pt-[.625rem] text-[.6875rem] font-semibold uppercase leading-[1rem] text-black/[.48] [&:empty]:inline [&:empty]:p-0">
                {title}
              </span>
              <span>
                {Object.entries(links).map(([title, props], index) => (
                  <span key={index} className="relative block px-2">
                    <Link
                      className={`flex items-center rounded-md px-3 py-[.625rem] text-[.9375rem] leading-[1.25rem] hover:bg-[#F5F5F5] ${
                        title === "more"
                          ? "mt-3 justify-center after:absolute after:inset-x-0 after:top-[-0.375rem] after:block after:h-[.5px] after:bg-black/[.08] after:content-['']"
                          : "justify-between whitespace-nowrap [&:hover>span]:inline-block"
                      }`}
                      href={typeof props === "string" ? props : props.link}
                      onMouseOver={() =>
                        setStripe(props.stripe ?? dropdown.stripe)
                      }
                      onMouseOut={() => setStripe(dropdown.stripe)}
                    >
                      {title === "more" ? (
                        <span className="inline-block text-center">
                          {props.text}
                        </span>
                      ) : (
                        <>
                          <span className="overflow-hidden text-ellipsis">
                            {title}
                          </span>
                          {props.date && (
                            <span className="hidden pl-5 text-[.6875rem] font-semibold leading-[1rem] text-black/[.48]">
                              {props.date}
                            </span>
                          )}
                        </>
                      )}
                    </Link>
                  </span>
                ))}
              </span>
            </span>
          ))}
        </span>
      </span>
    </>
  );
}
