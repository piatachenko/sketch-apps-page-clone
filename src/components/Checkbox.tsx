import { type ChangeEvent } from "react";

export default function Checkbox({
  name,
  label,
  ...props
}: {
  name: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        type="checkbox"
        name={name}
        id={name}
        className="mt-0.5 h-4 w-4 flex-none appearance-none rounded-[.1875rem] border-[1px] border-solid border-black/10 bg-white bg-center shadow-[0_0.0625rem_0.125rem_0_rgba(0,0,0,.1)] outline-none ring-[#ff7843] ring-offset-1 checked:bg-[#ff7843] focus:ring-2"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' color='%23FFF'%3E%3Cpath stroke='currentcolor' stroke-width='1.5' d='M4 8.8 6.4 12 12 4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        }}
        {...props}
      />

      {!!label && (
        <label
          htmlFor={name}
          className="pl-2 text-sm font-light leading-[1.3125rem]"
        >
          {label}
        </label>
      )}
    </>
  );
}
