"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./button";

export function UserHeader() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <div className="flex gap-4 px-4  items-center content-center">
      {user ? (
        <Link href="/profile">
          <div className="bg-brand-primary rounded-full w-10 aspect-square grid content-center">
            <span className="text-center text-white select-none text-lg overflow-auto">
              {user.firstName[0]}
              {user.lastName[0]}
            </span>
          </div>
        </Link>
      ) : (
        <>
          <Button href="/auth/signin">SignIn</Button>
        </>
      )}
    </div>
  );
}
