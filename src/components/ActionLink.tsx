import Link from "next/link";

export default function ActionLink({
  props,
}: {
  props: { [key: string]: string };
}) {
  return (
    <>
      {!!props.link && (
        <Link href={props.link} className="bg-black hover:bg-black/[.85] focus:outline-black/10 outline-2 outline text-white px-4 py-3.5 font-semibold rounded-md">
          {props.text}
        </Link>
      )}
    </>
  );
}
