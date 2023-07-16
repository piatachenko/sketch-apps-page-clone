export default function H1({
  children,
  animated,
}: {
  children: string;
  animated?: boolean;
}) {
  const wordArray = children.split(" ");
  const spanArray = wordArray.map(
    (word, i) =>
      `<span class="fade-in-animated-word" style="--index: ${i}">${word}</span>`
  );
  const animatedText = spanArray.join(" ");
  const text = animated ? animatedText : children;

  return (
    <>
      <h1
        className="text-center text-[2.75rem] font-black leading-[3rem] tracking-[-1px] md:text-[3.5rem] md:leading-[3.5rem] md:tracking-[-1.5px] xl:text-[4.75rem] xl:leading-[4.75rem]"
        dangerouslySetInnerHTML={{ __html: text }}
      ></h1>
    </>
  );
}
