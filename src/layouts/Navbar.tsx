import Link from "next/link";
import { Fragment } from "react";
import ActionLink from "../components/ActionLink";
import Dropdown from "../components/Dropdown";
import NavLink from "../components/NavLink";

const navLinks = [
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
  return (
    <>
      <nav>
        <div className="mb-[5.85rem] flex items-center justify-between py-[1.55rem]">
          <div className="flex items-center gap-6">
            <Link
              href={"https://sketch.com/"}
              className="logo aspect-square w-[32px]"
            />
            <div>
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
          <div className="space-x-4">
            <NavLink text={"Sign In"} link={"https://sketch.com/signin/"} />
            <ActionLink
              text={"Get started"}
              link={"https://sketch.com/signup/"}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
