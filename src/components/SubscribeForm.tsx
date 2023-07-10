import { useRef, type ChangeEvent, type FormEvent } from "react";
import H5 from "./H5";

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
      <div className="mt-24 flex gap-8">
        <div className="basis-2/3 pt-1">
          <H5>Incredible design, right in your inbox</H5>

          <div className="leading-6 opacity-70">
            Subscribe to our Beyond the Canvas newsletter and get the latest
            design news, articles, resources and inspiration every month
          </div>
        </div>

        <form onSubmit={handleSubmit} className="basis-1/3">
          <div>
            <div className="flex w-full gap-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email address"
                className="w-full rounded-md bg-[#F9F9F9] px-[0.875rem] py-3 outline-none ring-[1.5px] ring-black/10 focus:bg-white focus:ring-2 focus:ring-[#ff7843]"
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
              <input
                type="checkbox"
                name="email-receive-agree"
                id="email-receive-agree"
                className="mt-0.5 h-4 w-4 flex-none appearance-none rounded-[.1875rem] border-[1px] border-solid border-black/10 bg-white bg-center shadow-[0_0.0625rem_0.125rem_0_rgba(0,0,0,.1)] outline-none checked:bg-[#ff7843]"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' color='%23FFF'%3E%3Cpath stroke='currentcolor' stroke-width='1.5' d='M4 8.8 6.4 12 12 4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                }}
                onChange={handleChange}
              />

              <label
                htmlFor="email-receive-agree"
                className="pl-2 text-sm font-light leading-[1.3125rem] text-[#212123]"
              >
                I agree to receive marketing emails from Sketch.
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
