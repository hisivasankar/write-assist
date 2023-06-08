export default function Button(props: any) {
  const { children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className="px-3 py-1.5 text-white bg-slate-900 rounded"
    >
      {children}
    </button>
  );
}
