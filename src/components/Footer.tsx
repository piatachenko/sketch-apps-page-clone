import Link from "next/link";
import FooterLinks from "./FooterLinks";
import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";
import YoutubeIcon from "./YoutubeIcon";
import MastodonIcon from "./MastodonIcon";

export default function Footer() {
  return (
    <>
      <footer className="pt-2">
        <FooterLinks />
        <div className="flex items-center mt-3.5 py-10 [&>*]:basis-1/3">
          <div>
            <Link
              href={"https://sketch.com/"}
              className="logo bg-star block aspect-square h-[24px] bg-contain bg-no-repeat opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80"
            />
          </div>
          <div className="text-center text-[.875rem] leading-5 text-black/[.48]">
            © 2023 Sketch B.V.
          </div>
          <div>
            <div className="flex items-center justify-end gap-4 pb-1">
              <Link href="https://twitter.com/sketch" className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80">
                <TwitterIcon />
              </Link>
              <Link href="https://www.instagram.com/madewithsketch/" className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80">
                <InstagramIcon />
              </Link>
              <Link href="https://www.youtube.com/c/SketchDesign/" className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80">
                <YoutubeIcon />
              </Link>
              <Link href="https://mastodon.design/@Sketch" className="opacity-[.48] transition-opacity duration-[.125s] ease-[cubic-bezier(.455,.03,.515,.955)] hover:opacity-80">
                <MastodonIcon />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
