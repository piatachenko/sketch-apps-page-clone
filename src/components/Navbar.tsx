const navLinks = [
  {
    Product: {
      defaultStripe: "/stripe-product.png",
      "": {
        Design: {
          link: "https://www.sketch.com/design/",
          stripe: "/stripe-design.png",
        },
        Collaboration: {
          link: "https://www.sketch.com/collaborate/",
          stripe: "/stripe-collaboration.png",
        },
        Prototyping: {
          link: "https://www.sketch.com/prototype/",
          stripe: "/stripe-prototyping.png",
        },
        "Developer Handoff": {
          link: "https://www.sketch.com/handoff/",
          stripe: "/stripe-developer-handoff.png",
        },
        Extensions: {
          link: "https://www.sketch.com/extensions/",
          stripe: "/stripe-extensions.png",
        },
        "All Features": {
          link: "https://www.sketch.com/features/",
          stripe: "/stripe-features.png",
        },
      },
      "What's new": {
        "Experimental features menu": {
          link: "https://www.sketch.com/updates/#experimental-features-menu",
          date: "18 APR",
        },
        "Resolve Annotations": {
          link: "https://www.sketch.com/updates/#resolve-annotations",
          date: "18 APR",
        },
        "Version 96 is available to download": {
          link: "https://www.sketch.com/updates/#version-96-is-available-to-download",
          date: "18 APR",
        },
        "Annotations in the Mac app": {
          link: "https://www.sketch.com/updates/#annotations-in-the-mac-app",
          date: "18 JAN",
        },
        More: { "See all updates": "https://www.sketch.com/updates/" },
      },
    },
  },
  {
    Learn: {
      defaultStripe: "/stripe-learn.png",
      Courses: {
        "Sketch 101": {
          link: "https://www.sketch.com/courses/sketch-101/",
          stripe: "/stripe-sketch-101.png",
        },
        "Sketch 102": {
          link: "https://www.sketch.com/courses/sketch-102/",
          stripe: "/stripe-sketch-102.png",
        },
      },
      More: {
        Blog: "https://www.sketch.com/blog/",
        Documentation: "https://www.sketch.com/docs/",
        "Community Forum": "https://forum.sketch.com/",
        Newsletter: "https://www.sketch.com/newsletter/",
      },
    },
  },
  { Apps: "https://www.sketch.com/apps/" },
  { Pricing: "https://www.sketch.com/pricing/" },
  {
    "Why Sketch": {
      "Switch to Sketch": "https://www.sketch.com/switch-to-sketch/",
      "Sketch vs. Figma": "https://www.sketch.com/vs/figma/",
      "Sketch vs. Adobe XD": "https://www.sketch.com/vs/xd/",
      "Free for Education": "https://www.sketch.com/education/",
    },
  },
  {
    Support: {
      "Sketch Help": "https://help.sketch.com/",
      "Contact Us": "https://www.sketch.com/support/contact/",
      "Service Status": "https://status.sketch.com/",
    },
  },
];

export default function Navbar() {
  return (
    <>
      <nav>
        <div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </>
  );
}