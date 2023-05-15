export default function H1({ children }: { children?: string }) {
  return (
    <>
      <h1 className={children ? '' : 'hidden'} >{children}</h1>
    </>
  );
}
