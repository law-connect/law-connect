"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../../components/button";
import { Input, message } from "antd";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [oab, setOab] = useState("");
  const [password, setPassword] = useState("");
  const { push } = useRouter();

  async function handleSubmit(e: any) {
    e.preventDefault();

    const response = await signIn("credentials", {
      oab,
      password,
      redirect: false,
      callbackUrl: "/",
    });

    if (response?.error === "CredentialsSignin") {
      message.error("Credenciais inválidas!");
    } else {
      push("/");
    }
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
        <div>
          <label htmlFor="oab">Inscrição OAB</label>
          <Input
            type="text"
            id="oab"
            placeholder="12345"
            value={oab}
            onChange={(e) => setOab(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button className="mt-4 mx-auto" type="submit">
          Sign in
        </Button>
      </form>
    </main>
  );
}
