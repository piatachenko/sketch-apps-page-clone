import {
  Fragment,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import XIcon from "~/icons/XIcon";
import { navLinks } from "~/layouts/Navbar";
import ActionLink from "./ActionLink";
import Dropdown, { type DropdownProps } from "./Dropdown";
import NavLink from "./NavLink";

export default function NavAside({
  visible,
  setVisible,
}: {
  visible?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
  const [bgYPosition, setBgYPosition] = useState(0);

  function handleScroll(e: React.UIEvent<HTMLElement>) {
    const scrollTop = e.currentTarget.scrollTop;
    const scrollHeight = e.currentTarget.scrollHeight;
    const windowHeight = window.innerHeight;

    setBgYPosition((scrollTop * 100) / (scrollHeight - windowHeight) / 1.5);
  }

  useEffect(() => {
    if (visible) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <>
      <div
        className={`fixed inset-0 lg:hidden ${
          visible === false
            ? "pointer-events-none -z-10 opacity-0 transition-all duration-[.25s]"
            : "z-30 backdrop-blur-2xl"
        }
        `}
      >
        <div
          className={`fixed inset-0 z-40 flex transition-all ease-[cubic-bezier(.19,1,.22,1)] ${
            visible === false
              ? "-translate-x-full duration-[.25s]"
              : "translate-x-0 duration-[.4s]"
          }
          `}
        >
          <aside
            className="w-[83vw] overflow-auto bg-white bg-[size:1rem] bg-no-repeat pl-8 pr-4 md:w-[57vw]"
            style={{
              backgroundImage: "url(/stripe-mobile-nav.png)",
              backgroundPosition: `0% ${bgYPosition}%`,
            }}
            onScroll={handleScroll}
          >
            <div className="sticky top-0 z-50 -mb-[1.6rem] -mr-2 flex items-center justify-between bg-gradient-to-b from-[white_65%] py-1 text-[.9375rem]">
              <button onClick={() => setVisible(false)} className="p-2">
                <XIcon />
              </button>
              <NavLink text={"Sign In"} link={"https://sketch.com/signin/"} />
            </div>
            <div>
              {navLinks.map((navLink) =>
                Object.entries(navLink).map(([title, link], index) => (
                  <Fragment key={index}>
                    {typeof link === "string" ? (
                      <></>
                    ) : // <NavLink text={title} link={link} />
                    typeof link === "object" ? (
                      <Dropdown title={title} dropdown={link as DropdownProps} />
                    ) : null}
                  </Fragment>
                ))
              )}
            </div>
            <div className="sticky bottom-0 z-50 flex items-center justify-center bg-gradient-to-t from-[white_67%] px-2 py-6 text-center [&>*]:flex-1 [&>*]:border [&>*]:border-black [&>*]:py-[.5625rem]">
              <ActionLink
                text={"Get started for free"}
                link={"https://sketch.com/signup/"}
              />
            </div>
          </aside>

          <div
            className="h-full flex-auto"
            onClick={() => {
              setVisible(false);
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
