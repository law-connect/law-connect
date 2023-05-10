"use client";

import { ChangeEvent, useState } from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { Input } from "../../../components/input";
import { Button } from "../../../components/button";

export default function SignInPage() {
  const [oab, setOab] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    await signIn("credentials", {
      oab,
      password,
      callbackUrl: "/",
    });
  }

  return (
    <main className="h-screen w-screen grid content-center">
      <form
        className="border w-max mx-auto p-8 rounded-sm grid gap-2"
        onSubmit={handleSubmit}
      >
        <Image
          src="/assets/logo-square.svg"
          alt="Law Connect"
          width={150}
          height={150}
          className="mx-auto mb-10"
        />
        <Input
          label="Inscrição OAB"
          type="text"
          id="oab"
          placeholder="12345"
          value={oab}
          onChange={(e) => setOab(e.target.value)}
          required
        />
        <Input
          label="Senha"
          type="password"
          id="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button className="mt-4 mx-auto" type="submit">
          Sign in
        </Button>
      </form>
    </main>
  );
}
