import Link from "next/link";

export default function Intro() {
  return (
    <div className="text-center flex flex-col gap-4">
      <h1 className="text-4xl">
        Welcome to <span className="font-bold">Write Assist</span>
      </h1>
      <p className="text-2xl">
        Are you preparing for exams like IELTS, TOFEL and looking for a place to
        practice letter and essay writting?
      </p>
      <div>
        <ul className="flex flex-col gap-4 lg:flex-row justify-center">
          <li className="text-xl font-semibold px-4 py-2 bg-slate-950 text-white rounded-full">
            <Link href={"/practice"}>Start practicing now</Link>
          </li>
          <li className="px-4 py-2 text-xl font-semibold">
            <Link href={"/learn"}>Learn from others {"->"} </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
