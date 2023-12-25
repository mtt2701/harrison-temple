"use client";
import {usePathname} from "next/navigation"
import Link from "next/link";
import { FilledButton } from "./Button";

export default function Home() {
    const pathname=usePathname();
    if (pathname!="/studio") {
        return <Navbar />;
    }
}
  
  function Navbar() {
    return (
      <nav className="border-b sticky top-0 bg-black dark:bg-white text-white dark:text-black border-black z-10">
        <div className="h-16 md:h-24 p-4 flex items-center grid-cols-3">
          <div></div>
          <div className="mx-auto">
          <Link href="/" className="font-bold text-xl md:text-4xl ">
            {/*  fixed left-1/2 -translate-x-1/2  max-w-7xl  style="ml-auto"*/}
            HARRISON TEMPLE
          </Link>
          </div>
          <div >
          <FilledButton>
            H
          </FilledButton>
          </div>
        </div>
      </nav>
    );
  }

