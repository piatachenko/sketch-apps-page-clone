import { Fragment, useEffect, type Dispatch, type SetStateAction } from "react";
import XIcon from "~/icons/XIcon";
import { navLinks } from "~/layouts/Navbar";
import ActionLink from "./ActionLink";
import Dropdown from "./Dropdown";
import NavLink from "./NavLink";

export default function NavAside({
  visible,
  setVisible,
}: {
  visible?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) {
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
          className={`fixed inset-0 z-40 transition-all ease-[cubic-bezier(.19,1,.22,1)] ${
            visible === false
              ? "-translate-x-full duration-[.25s]"
              : "translate-x-0 duration-[.4s]"
          }
          `}
        >
          <aside
            className="fixed inset-y-0 left-0 z-40 w-[83vw] overflow-auto bg-white bg-[size:1rem] bg-[0_0] bg-no-repeat pl-8 pr-4 md:w-[57vw]"
            style={{ backgroundImage: "url(/stripe-mobile-nav.png)" }}
          >
            <div className="sticky top-0 z-50 -mb-0.5 -mr-2 flex items-center justify-between bg-gradient-to-b from-[white_65%] py-1 text-[.9375rem]">
              <button onClick={() => setVisible(false)} className="p-2">
                <XIcon />
              </button>
              <NavLink text={"Sign In"} link={"https://sketch.com/signin/"} />
            </div>
            <div className="px-2 pb-4">
              {navLinks.map((navLink) =>
                Object.entries(navLink).map(([title, link], index) => (
                  <Fragment key={index}>
                    {typeof link === "string" ? (
                      <></>
                    ) : // <NavLink text={title} link={link} />
                    typeof link === "object" ? (
                      <Dropdown title={title} dropdown={link} />
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
        </div>
      </div>
    </>
  );
}
