import Intro from "@/components/intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex flex-col p-24 lg:w-4/5 2xl:w-3/5">
      <Intro />
    </main>
  );
}