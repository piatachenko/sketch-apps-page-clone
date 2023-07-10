export default function TextInput({
  type,
  name,
  required,
  placeholder,
}: {
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <>
      <input
        type={type || "text"}
        name={name}
        id={name}
        required={required || false}
        placeholder={placeholder}
        className="w-full rounded-md bg-[#F9F9F9] px-[0.875rem] py-3 text-black outline-none ring-[1.5px] ring-black/10 placeholder:text-black/[.55] focus:bg-white focus:ring-2 focus:ring-[#ff7843]"
      />
    </>
  );
}
