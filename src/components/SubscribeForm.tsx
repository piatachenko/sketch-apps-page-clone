import { useRef, type ChangeEvent, type FormEvent } from "react";
import Checkbox from "./Checkbox";
import H5 from "./H5";
import TextInput from "./TextInput";

export default function SubscribeForm() {
  const btnRef = useRef<HTMLButtonElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (btnRef.current) {
      btnRef.current.disabled = !e.target.checked;
    }
  }

  return (
    <>
      <div className="mt-16 lg:mt-24 flex max-md:flex-col gap-4 md:gap-8">
        <div className="basis-1/2 lg:basis-2/3 pt-1">
          <H5>Incredible design, right in your inbox</H5>

          <div className="font-light leading-6 opacity-70">
            Subscribe to our Beyond the Canvas newsletter and get the latest
            design news, articles, resources and inspiration every month
          </div>
        </div>

        <form onSubmit={handleSubmit} className="basis-1/2 lg:basis-1/3">
          <div>
            <div className="flex w-full gap-2">
              <TextInput
                type={"email"}
                name={"email-subscribe"}
                required
                placeholder={"Email address"}
              />

              <button
                ref={btnRef}
                className="whitespace-nowrap rounded-md bg-black px-[.8125rem] py-[.6875rem] font-semibold text-white outline outline-2 hover:bg-black/[.85] focus:outline-black/10 disabled:bg-black/40"
                disabled
              >
                Try it out
              </button>
            </div>

            <div className="mt-2 flex">
              <Checkbox
                name={"email-receive-agree"}
                label={"I agree to receive marketing emails from Sketch."}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
