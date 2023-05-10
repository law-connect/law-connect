import Image from "next/image";
import Link from "next/link";
import { Input } from "./input";
import { UserHeader } from "./user-header";

export function Header() {
  return (
    <header className="bg-neutral-100 shadow">
      <div className="flex justify-between items-center max-w-screen-2xl m-auto">
        <nav className="flex items-center">
          <Link href="/" className="py-3 px-4 text-3xl hover:bg-neutral-200">
            <Image
              src="/assets/logo-side.svg"
              alt="Law Connect"
              width={250}
              height={50}
            />
          </Link>
        </nav>

        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Buscar..."
          className="flex flex-1 mx-4"
        />

        <UserHeader />
      </div>
    </header>
  );
}
