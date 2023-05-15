export default function ParagraphArticle({ children }: { children?: string }) {
  return (
    <>
      <p className={children ? '' : 'hidden'} >{children}</p>
    </>
  );
}
