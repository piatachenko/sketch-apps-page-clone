import Link from "next/link";
import { Fragment, useState } from "react";
import NavAside from "~/components/NavAside";
import ActionLink from "../components/ActionLink";
import Dropdown from "../components/Dropdown";
import NavLink from "../components/NavLink";

export const navLinks = [
  {
    Product: {
      stripe: "/stripe-product.png",
      "": {
        Design: {
          link: "https://sketch.com/design/",
          stripe: "/stripe-design.png",
        },
        Collaboration: {
          link: "https://sketch.com/collaborate/",
          stripe: "/stripe-collaboration.png",
        },
        Prototyping: {
          link: "https://sketch.com/prototype/",
          stripe: "/stripe-prototyping.png",
        },
        "Developer Handoff": {
          link: "https://sketch.com/handoff/",
          stripe: "/stripe-developer-handoff.png",
        },
        Extensions: {
          link: "https://sketch.com/extensions/",
          stripe: "/stripe-extensions.png",
        },
        "All Features": {
          link: "https://sketch.com/features/",
          stripe: "/stripe-features.png",
        },
      },
      "What's new": {
        "Experimental features menu": {
          link: "https://sketch.com/updates/#experimental-features-menu",
          date: "18 APR",
        },
        "Resolve Annotations": {
          link: "https://sketch.com/updates/#resolve-annotations",
          date: "18 APR",
        },
        "Version 96 is available to download": {
          link: "https://sketch.com/updates/#version-96-is-available-to-download",
          date: "18 APR",
        },
        "Annotations in the Mac app": {
          link: "https://sketch.com/updates/#annotations-in-the-mac-app",
          date: "18 JAN",
        },
        more: {
          text: "See all updates",
          link: "https://sketch.com/updates/",
        },
      },
    },
  },
  {
    Learn: {
      stripe: "/stripe-learn.png",
      Courses: {
        "Sketch 101": {
          link: "https://sketch.com/courses/sketch-101/",
          stripe: "/stripe-sketch-101.png",
        },
        "Sketch 102": {
          link: "https://sketch.com/courses/sketch-102/",
          stripe: "/stripe-sketch-102.png",
        },
      },
      More: {
        Blog: "https://sketch.com/blog/",
        Documentation: "https://sketch.com/docs/",
        "Community Forum": "https://forum.sketch.com/",
        Newsletter: "https://sketch.com/newsletter/",
      },
    },
  },
  { Apps: "https://sketch.com/apps/" },
  { Pricing: "https://sketch.com/pricing/" },
  {
    "Why Sketch": {
      "": {
        "Switch to Sketch": "https://sketch.com/switch-to-sketch/",
        "Sketch vs. Figma": "https://sketch.com/vs/figma/",
        "Sketch vs. Adobe XD": "https://sketch.com/vs/xd/",
        "Free for Education": "https://sketch.com/education/",
      },
    },
  },
  {
    Support: {
      "": {
        "Sketch Help": "https://help.sketch.com/",
        "Contact Us": "https://sketch.com/support/contact/",
        "Service Status": "https://status.sketch.com/",
      },
    },
  },
];

export default function Navbar() {
  const [isAsideVisible, setIsAsideVisible] = useState(false);
  return (
    <>
      <nav>
        <div
          className={`inset-x-0 top-0 z-30 flex items-center justify-between py-[.325rem] transition-all ease-[cubic-bezier(.455,.03,.515,.955)] max-lg:fixed max-lg:bg-white/80 max-lg:px-2.5 max-lg:shadow-[0_0_0_0.0625rem_rgba(0,0,0,.08)] max-lg:backdrop-blur-2xl dark:max-lg:bg-black/80 lg:py-[1.55rem] ${
            isAsideVisible
              ? "max-lg:-translate-y-full"
              : "translate-y-0 duration-0"
          }`}
        >
          <button onClick={() => setIsAsideVisible(true)} className="lg:hidden">
            <div className="relative m-4 h-1.5 w-5 before:absolute before:inset-x-0 before:top-0 before:block before:h-0.5 before:-translate-y-full before:bg-black before:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:block after:h-0.5 after:translate-y-full after:bg-black after:content-[''] dark:before:bg-[#ebebeb] dark:after:bg-[#ebebeb]" />
          </button>

          <div className="contents items-center gap-6 lg:flex">
            <Link
              href={"https://sketch.com/"}
              className="logo aspect-square w-[32px] transition-opacity duration-[.125s] ease-out hover:opacity-[.48] max-lg:absolute max-lg:right-1/2 max-lg:translate-x-1/2 max-lg:scale-[.81] max-lg:opacity-90 dark:max-lg:invert"
            />

            <div className="max-lg:hidden">
              {navLinks.map((navLink) =>
                Object.entries(navLink).map(([title, link], index) => (
                  <Fragment key={index}>
                    {typeof link === "string" ? (
                      <NavLink text={title} link={link} />
                    ) : typeof link === "object" ? (
                      <Dropdown title={title} dropdown={link} />
                    ) : null}
                  </Fragment>
                ))
              )}
            </div>
          </div>

          <div className="space-x-4 max-lg:contents dark:max-lg:text-white max-lg:[&_*]:text-[.9375rem] max-xl:[&_.bg-black]:p-3 max-xl:[&_.bg-black]:text-[.875rem] max-lg:[&_.bg-black]:hidden dark:max-lg:[&_:hover]:text-[unset]">
            <NavLink text={"Sign In"} link={"https://sketch.com/signin/"} />

            <ActionLink
              text={"Get started"}
              link={"https://sketch.com/signup/"}
            />
          </div>
        </div>
      </nav>

      <NavAside visible={isAsideVisible} setVisible={setIsAsideVisible} />
    </>
  );
}
