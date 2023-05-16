import Link from "next/link";

export default function ActionLink({
  props,
}: {
  props: { [key: string]: string };
}) {
  return (
    <>
      {!!props.link && (
        <Link href={props.link}>
          <span>{props.text}</span>
        </Link>
      )}
    </>
  );
}
