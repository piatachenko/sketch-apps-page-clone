import { Fragment } from "react";
import FooterLink from "./FooterLink";
import H6 from "./H6";

const footerLinks = [
  [
    ["Product"],
    ["What's New", "https://sketch.com/updates/"],
    ["Design", "https://sketch.com/design/"],
    ["Collaboration", "https://sketch.com/collaborate/"],
    ["Prototyping", "https://sketch.com/prototype/"],
    ["Developer Handoff", "https://sketch.com/handoff/"],
    ["Apps", "https://sketch.com/apps/"],
    ["Extensions", "https://sketch.com/extensions/"],
    ["All Features", "https://sketch.com/features/"],
    ["Pricing", "https://sketch.com/pricing/"],
  ],
  [
    ["Why Sketch"],
    ["Switch to Sketch", "https://sketch.com/switch-to-sketch/"],
    ["Sketch vs. Figma", "https://sketch.com/vs/figma/"],
    ["Sketch vs. Adobe XD", "https://sketch.com/vs/xd/"],
    ["Free for Education", "https://sketch.com/education/"],
  ],
  [
    ["Learn"],
    ["Blog", "https://sketch.com/blog/"],
    ["Course: Sketch 101", "https://sketch.com/courses/sketch-101/"],
    ["Course: Sketch 102", "https://sketch.com/courses/sketch-102/", "new"],
    ["Documentation", "https://sketch.com/docs/"],
    ["Forum & Events", "https://sketch.com/community/", "new"],
    ["Newsletter", "https://sketch.com/newsletter/"],
    ["Developer Platform", "https://developer.sketch.com/"],
  ],
  [
    ["Support"],
    ["Sketch Help", "https://help.sketch.com/"],
    ["Contact Us", "https://sketch.com/support/contact/"],
    ["Manage License", "https://sketch.com/license/"],
    ["Service Status", "https://status.sketch.com/"],
  ],
  [
    ["Company"],
    ["About Us", "https://sketch.com/about-us/"],
    ["Careers", "https://sketch.com/about-us/#careers-at-sketch"],
    ["Terms & Policies", "https://sketch.com/legal/"],
    ["Cookie Preferences", "https://sketch.com/apps/#"],
  ],
];

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] justify-between gap-8 md:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] lg:flex">
        {footerLinks.map((col, index) => (
          <div key={index}>
            {col.map((link, index) => (
              <Fragment key={index}>
                {link[1] ? (
                  <FooterLink link={link} />
                ) : link[0] ? (
                  <H6>{link[0]}</H6>
                ) : null}
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
