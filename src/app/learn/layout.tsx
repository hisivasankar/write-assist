export default function LearnLayout(props: { children: React.ReactNode }) {
  return (
    <div className="mx-auto px-2 lg:px-0 lg:w-4/5 2xl:w-3/5">
      {props.children}
    </div>
  );
}
