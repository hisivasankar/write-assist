export default function WriteLayout(props: { children: React.ReactNode }) {
  return (
    <main className="mx-auto px-2 lg:px-0 lg:w-4/5 2xl:w-3/5">
      {props.children}
    </main>
  );
}
