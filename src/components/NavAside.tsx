import { Fragment, type Dispatch, type SetStateAction } from "react";
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
  // if (visible) {
  //   document.documentElement.style.overflow = "hidden"
  // } else {
  //   document.documentElement.style.overflow = "auto"
  // }
  return (
    <>
      <div className={`fixed inset-0 lg:hidden overflow-hidden overscroll-contain ${
            visible === false
              ? "-z-10 opacity-0 pointer-events-none transition-all duration-[.25s]"
              : "backdrop-blur-2xl z-40"
          }
          `}>
        <div
          className={`fixed inset-0 z-50 lg:hidden transition-all ease-[cubic-bezier(.19,1,.22,1)] ${
            visible === false
              ? "-translate-x-full duration-[.25s]"
              : "translate-x-0 duration-[.4s]"
          }
          `}
        >
          <aside
            className="fixed overscroll-contain inset-y-0 left-0 z-50 w-[83vw] overflow-auto bg-white bg-[size:1rem] bg-[0_0] bg-no-repeat pl-10 pt-1 md:w-[57vw]"
            style={{ backgroundImage: "url(/stripe-mobile-nav.png)" }}
          >
            <div className="sticky top-0 -mb-1.5 flex items-center justify-between">
              <button onClick={() => setVisible(false)}>
                <XIcon />
              </button>
              <NavLink text={"Sign In"} link={"https://sketch.com/signin/"} />
            </div>
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
            <div className="sticky bottom-0 flex items-center justify-center">
              <ActionLink
                text={"Get started"}
                link={"https://sketch.com/signup/"}
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
