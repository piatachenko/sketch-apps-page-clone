export default function H6({ children }: { children?: string }) {
  return (
    <>
      <h6 className={children ? '' : 'hidden'} >{children}</h6>
    </>
  );
}
