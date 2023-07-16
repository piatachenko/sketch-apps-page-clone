import Link from "next/link";
import FooterNav from "../components/FooterNav";
import InstagramIcon from "../icons/InstagramIcon";
import MastodonIcon from "../icons/MastodonIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

export default function Footer() {
  return (
    <>
      <footer className="pt-2">
        <FooterNav />
        <div className="mt-3.5 flex items-center py-10 max-md:flex-col-reverse max-md:gap-6 max-lg:md:-mt-3 max-lg:md:py-20 [&>*]:basis-1/3">
          <div className="hidden md:block">
            <Link
              href={"https://sketch.com/"}
              className="logo block aspect-square h-[24px] bg-contain bg-no-repeat opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80"
            />
          </div>
          <div className="text-center text-[.875rem] leading-5 text-black/[.48]">
            © 2023 Sketch B.V.
          </div>
          <div className="max-md:[&_svg]:scale-125">
            <div className="flex items-center justify-end gap-4 pb-1">
              <Link
                href="https://twitter.com/sketch"
                className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.instagram.com/madewithsketch/"
                className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.youtube.com/c/SketchDesign/"
                className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80"
              >
                <YoutubeIcon />
              </Link>
              <Link
                href="https://mastodon.design/@Sketch"
                className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80"
              >
                <MastodonIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
