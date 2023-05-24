import Link from "next/link";

export default function Header() {
  return (
    <div className="border-b py-4 px-2 lg:px-0">
      <nav role="navigation" className="mx-auto lg:w-4/5 2xl:w-3/5">
        <ul className="sticky flex flex-row justify-between">
          <li>
            <div>
              <Link href={"/"}>
                <span className="font-semibold">Write Assist</span>
              </Link>
            </div>
          </li>

          <li>
            <ul className="flex flex-row gap-4">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/write"}>Write</Link>
              </li>
              <li>
                <Link href={"/learn"}>Learn</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
