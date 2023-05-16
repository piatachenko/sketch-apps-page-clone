import Image from "next/image";
import Link from "next/link";

export default function MoreLink({
  props,
}: {
  props: { [key: string]: string };
}) {
  return (
    <>
      {!!props.link && !!props.text && (
        <Link href={props.link} className="flex">
          {!!props.image && (
            <Image src={props.image} alt={""} width={128} height={128} className="w-16 rounded-md"></Image>
          )}
          <span dangerouslySetInnerHTML={{ __html: props.text }} />
        </Link>
      )}
    </>
  );
}
