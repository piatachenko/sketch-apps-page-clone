export default function Badge({ children }: { children?: string }) {
  return (
    <>
      <div className={children ? '' : 'hidden'} >{children}</div>
    </>
  );
}
