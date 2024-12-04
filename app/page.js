import Image from "next/image";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";

export default function Home() {
  return (
    <main className="px-24 py-16 grid grid-cols-1 md:grid-cols-3 gap-3">
      <div className=" ">
        <SearchSection />
      </div>
      <div className="col-span-2 ">
        <h2>map here</h2>
      </div>
    </main>
  );
}
