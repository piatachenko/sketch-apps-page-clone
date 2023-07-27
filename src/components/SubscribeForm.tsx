import { useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Checkbox from "./Checkbox";
import H5 from "./H5";
import TextInput from "./TextInput";

export default function SubscribeForm() {
  const [key, setKey] = useState(0);
  const btnRef = useRef<HTMLButtonElement>(null);
  const alertRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (btnRef.current) {
      const btn = btnRef.current;
      btn.disabled = true;
      btn.style.backgroundColor = "black";
      btn.style.setProperty("--tw-text-opacity", "0");
      btn.classList.add("wait");
    }

    const emailInput = document.querySelector(
      "#email-subscribe"
    ) as HTMLInputElement;

    emailInput.disabled = true;

    const checkbox = document.querySelector(
      "#email-receive-agree"
    ) as HTMLInputElement;

    checkbox.disabled = true;

    setTimeout(() => {
      alertRef.current?.classList.add("alert-fade-in");

      emailInput.style.setProperty("--tw-ring-color", "var(--green)");

      if (btnRef.current) {
        const btn = btnRef.current;
        btn.style.backgroundColor = "var(--green)";
        btn.classList.remove("wait");
        btn.classList.add("check");
      }

      setTimeout(() => {
        setKey((key) => key + 1);
        setTimeout(() => {
          alertRef.current?.classList.replace(
            "alert-fade-in",
            "alert-fade-out"
          );
        }, 1000);
      }, 2000);
    }, 1500);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (btnRef.current) {
      btnRef.current.disabled = !e.target.checked;
    }
  }

  return (
    <>
      <div className="mt-16 flex gap-4 max-md:flex-col md:gap-8 lg:mt-24">
        <div className="basis-1/2 pt-1 lg:basis-2/3">
          <H5>Incredible design, right in your inbox</H5>

          <div className="font-light leading-6 opacity-70">
            Subscribe to our Beyond the Canvas newsletter and get the latest
            design news, articles, resources and inspiration every month
          </div>
        </div>

        <form
          key={key}
          onSubmit={handleSubmit}
          className="basis-1/2 lg:basis-1/3"
        >
          <div className="flex flex-wrap justify-between gap-2">
            <div className="flex-1 flex-grow">
              <TextInput
                type={"email"}
                name={"email-subscribe"}
                required
                placeholder={"Email address"}
              />
            </div>

            <div className="order-3 flex flex-[1_1_100%]">
              <Checkbox
                name={"email-receive-agree"}
                label={"I agree to receive marketing emails from Sketch."}
                onChange={handleChange}
              />
            </div>

            <button
              ref={btnRef}
              className="relative whitespace-nowrap rounded-md bg-black px-[.825rem] py-[.6875rem] font-semibold text-white outline outline-1 outline-black/40 after:absolute after:inset-0 after:block after:bg-center after:bg-no-repeat after:content-[''] hover:bg-black/[.85] focus:outline-2 focus:outline-black/20 disabled:bg-black/40"
              disabled
            >
              Try it out
            </button>
          </div>
        </form>

        <div
          ref={alertRef}
          className="fixed bottom-6 right-1/2 z-20 w-full max-w-max translate-x-1/2 translate-y-[calc(1.5rem_+_100%)] px-6 transition-all duration-300"
        >
          <div className="rounded-xl border border-white/10 bg-[--green] px-5 py-4 text-sm font-semibold leading-4 text-white shadow-md">
            We’ve successfully received your submission. Thank you!
          </div>
        </div>
      </div>
    </>
  );
}
