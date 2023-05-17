import { type NextPage } from "next";
import Head from "next/head";
import Article from "~/components/Article";
import H1 from "~/components/H1";
import HeaderParagraph from "~/components/HeaderParagraph";
import Main from "~/layouts/Main";

const articles = [
  {
    badge: "For editors",
    header: "Design on your Mac",
    paragraph:
      "Design, prototype, and illustrate in a truly native macOS app, online or offline. Work in private or collaborate with others, in real time.",
    image: "/article-first-default.avif",
    mobileImage: "/article-first-mobile.avif",
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
    mobileImage: "/article-second-mobile.avif",
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
    mobileImage: "/article-third-mobile.avif",
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
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <header className="mx-auto mb-24 mt-[12rem] max-w-4xl [&_h1]:mb-[1.55rem] [&_p]:px-[4rem]">
          <H1>Every hero needs a sidekick. We have two.</H1>
          <HeaderParagraph>
            Create with our award-winning macOS app, share your projects in the
            browser (on any platform), and take Sketch with you.
          </HeaderParagraph>
        </header>
        <section className="overflow-hidden rounded-xl border border-black/10">
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
      </Main>
    </>
  );
};

export default Home;
