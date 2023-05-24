"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import classnames from "classnames";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="border-b py-4 px-2 lg:px-0">
      <nav role="navigation" className="mx-auto lg:w-4/5 2xl:w-3/5">
        <ul className="sticky flex flex-row justify-between">
          <li>
            <div>
              <Link href={"/"} className="inline-flex gap-2">
                <Image
                  src={"/brand-32x32.png"}
                  alt="Write assit logo"
                  width={16}
                  height={16}
                  className=""
                />
                {"  "}
                <span className="font-semibold">Write Assist</span>
              </Link>
            </div>
          </li>

          <li>
            <ul className="flex flex-row gap-4">
              <li
                className={classnames({
                  underline: pathname === "/",
                })}
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className={classnames({
                  underline: pathname === "/write",
                })}
              >
                <Link href={"/write"}>Write</Link>
              </li>
              <li
                className={classnames({
                  underline: pathname === "/learn",
                })}
              >
                <Link href={"/learn"}>Learn</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
