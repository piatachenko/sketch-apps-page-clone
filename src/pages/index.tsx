import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Article from "~/components/Article";
import H1 from "~/components/H1";
import HeaderParagraph from "~/components/HeaderParagraph";
import Header from "~/layouts/Header";
import Main from "~/layouts/Main";

const articles = [
  {
    badge: "For editors",
    header: "Design on your Mac",
    paragraph:
      "Design, prototype, and illustrate in a truly native macOS app, online or offline. Work in private or collaborate with others, in real time.",
    image: "/article-first-default.avif",
    mobileImage: { src: "/article-first-mobile.avif", width: 828, height: 485 },
    more: {
      image: "/1ml.avif",
      text: "Everything you need to know about the Sketch <b>Mac app</b>",
      link: "https://www.sketch.com/blog/everything-about-the-sketch-mac-app-2022/",
    },
    action: {
      text: "Download for macOS",
      link: "https://www.sketch.com/downloads/mac/",
    },
    additional: [
      {
        text: "Browse old versions",
        link: "https://www.sketch.com/releases/mac/",
      },
      { text: "Download Beta", link: "https://www.sketch.com/beta/" },
    ],
  },
  {
    badge: "For everyone",
    header: "Explore in your browser",
    paragraph:
      "Browse documents, inspect designs, export assets, discuss feedback, manage users, and invite guests — on any computer, in any browser.",
    image: "/article-second-default.avif",
    mobileImage: {
      src: "/article-second-mobile.avif",
      width: 828,
      height: 576,
    },
    more: {
      image: "/2ml.avif",
      text: "Everything you need to know about the Sketch <b>Web app</b>",
      link: "https://www.sketch.com/blog/everything-about-the-sketch-web-app-2022/",
    },
    action: { text: "Open the web app", link: "https://www.sketch.com/c" },
  },
  {
    badge: "For everyone",
    header: "Preview on iPhone",
    paragraph:
      "View your documents on the go, play prototypes on a real device, and mirror designs as you edit them on your Mac.",
    image: "/article-third-default.avif",
    mobileImage: { src: "/article-third-mobile.avif", width: 828, height: 767 },
    action: {
      text: "Download on the App Store",
      link: "https://apps.apple.com/app/sketch-view-and-mirror/id1609224699",
    },
    additional: [
      {
        text: "Our iPhone app works exclusively with Workspace documents.",
      },
    ],
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#212123"
          media="(prefers-color-scheme: dark)"
        />

        <title>
          Sketch’s Mac, web &amp; iPhone apps · The best of all worlds · Sketch
        </title>

        <meta
          property="og:title"
          content="Sketch’s Mac, web &amp; iPhone apps · The best of all worlds"
        />
        <meta
          name="twitter:title"
          content="Sketch’s Mac, web &amp; iPhone apps · The best of all worlds"
        />

        <meta
          name="description"
          content="Design, collaborate, prototype and handoff using our native Mac app and web app. View and mirror with our iPhone app."
        />
        <meta
          property="og:description"
          content="Design, collaborate, prototype and handoff using our native Mac app and web app. View and mirror with our iPhone app."
        />
        <meta
          name="twitter:description"
          content="Design, collaborate, prototype and handoff using our native Mac app and web app. View and mirror with our iPhone app."
        />

        <meta
          property="og:image"
          content="https://www.sketch.com/images/metadata/pages/apps.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="canonical" href="https://www.sketch.com/apps/" />
        <meta property="og:url" content="https://www.sketch.com/apps/" />

        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Sketch" />
        <meta name="twitter:site" content="@sketch" />
        <link
          rel="alternate"
          type="application/atom+xml"
          title="RSS Feed for the Sketch Blog"
          href="https://www.sketch.com/blog/feed.xml"
        />

        <link
          rel="icon"
          type="image/svg+xml"
          href="https://www.sketch.com/images/metadata/icon-16.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://www.sketch.com/images/metadata/icon-16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://www.sketch.com/images/metadata/icon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="https://www.sketch.com/images/metadata/icon-96.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="152x152"
          href="https://www.sketch.com/images/metadata/icon-152.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="167x167"
          href="https://www.sketch.com/images/metadata/icon-167.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          type="image/png"
          sizes="180x180"
          href="https://www.sketch.com/images/metadata/icon-180.png"
        />
      </Head>
      <Main>
        <Header>
          <H1 animated>Every hero needs a sidekick. We have two.</H1>
          <HeaderParagraph>
            Create with our award-winning macOS app, share your projects in the
            browser (on any platform), and take Sketch with you.
          </HeaderParagraph>
        </Header>
        <section className="overflow-hidden rounded-xl border border-black/10 bg-white/[.64] shadow-[0_4px_8px_0_rgba(0,0,0,.1)] backdrop-blur-2xl">
          <div>
            {articles.map((article, index) => (
              <Article
                key={index}
                badge={article.badge}
                header={article.header}
                paragraph={article.paragraph}
                image={article.image}
                mobileImage={article.mobileImage}
                more={article.more}
                action={article.action}
                additional={article.additional}
              />
            ))}
          </div>
        </section>
        <div className="absolute inset-0 -z-10">
          <Image
            src="/page-background.avif"
            alt="background"
            width={1920}
            height={1464}
            priority
            className="absolute top-40 h-[90.5rem] object-cover object-center sm:top-4 md:top-[calc(18.6vw_-_10.628rem)] md:object-[53.5%] lg:top-40 lg:object-center xl:top-[9.5rem] xl:object-[48%] 2xl:top-[calc(15vw_-_2rem)] 2xl:h-auto 2xl:w-full"
          />
        </div>
      </Main>
    </>
  );
};

export default Home;
