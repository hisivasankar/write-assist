import clsx from "clsx";

export default function Button(props: any) {
  const { children, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={clsx(
        "inline-flex px-3 py-1.5 text-white bg-slate-900 rounded gap-2",
        otherProps.className
      )}
    >
      {children}
    </button>
  );
}
