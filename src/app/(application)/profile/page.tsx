"use client";
import { Button } from "@/components/button";
import { signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button
        onClick={() => signOut({ redirect: true, callbackUrl: "/auth/signin" })}
      >
        SignOut
      </Button>
    </>
  );
}
