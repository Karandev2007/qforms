import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-3">
            <Image
              src="https://iili.io/FoXYCFt.md.png"
              alt="QForms Logo"
              width={32}
              height={32}
              priority
            />
            <span className="font-semibold text-xl">QForms</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center px-4">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
} 