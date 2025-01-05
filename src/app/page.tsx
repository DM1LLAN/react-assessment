import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center justify-center w-full">
          <Image
            src="/auxo.svg"
            alt="Auxo logo"
            width={640}
            height={134}
            priority
          />
          <Link 
            href="/itineraries" 
            className="px-12 py-2 bg-[#DDF0F2] text-[#01C2D2] text-xl font-light rounded-[8px] hover:bg-[#d3e9eb] transition-colors shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
          >
            Start
          </Link>
        </main>
      </div>
  );
}
