export default function H3({ children }: { children?: string }) {
  return (
    <>
      <h3 className={children ? '' : 'hidden'} >{children}</h3>
    </>
  );
}
