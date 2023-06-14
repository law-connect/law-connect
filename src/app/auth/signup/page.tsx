"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../../../components/button";
import { Input, message } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const [oab, setOab] = useState("");
  const [password, setPassword] = useState("");
  // const { push } = useRouter();

  // async function handleSubmit(e: any) {
  //   e.preventDefault();

  //   const response = await signIn("credentials", {
  //     oab,
  //     password,
  //     redirect: false,
  //     callbackUrl: "/",
  //   });

  //   if (response?.error === "CredentialsSignin") {
  //     message.error("Credenciais inválidas!");
  //   } else {
  //     push("/");
  //   }
  // }

  return (
    <main className="h-screen w-screen grid content-center">
      <form className="border w-max mx-auto p-8 rounded-sm grid gap-2">
        <Image
          src="/assets/logo-square.svg"
          alt="Law Connect"
          width={150}
          height={150}
          className="mx-auto mb-10"
        />
        <div>
          <label htmlFor="oab">Inscrição OAB</label>
          <Input type="text" id="oab" required />
        </div>
        <div>
          <label htmlFor="oab">Nome</label>
          <Input type="text" id="oab" required />
        </div>
        <div>
          <label htmlFor="oab">Sobrenome</label>
          <Input type="text" id="oab" required />
        </div>
        <div>
          <label htmlFor="oab">E-mail</label>
          <Input type="text" id="oab" required />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <Input.Password id="password" required />
        </div>
        <div>
          <label htmlFor="password">Repita sua senha</label>
          <Input.Password id="password" required />
        </div>
        <Button className="mt-4 mx-auto" type="submit">
          Registrar
        </Button>
        <p className="text-sm mt-2 mx-auto">
          Já possui uma conta?{" "}
          <Link
            href="/auth/signin"
            className="text-brand-primary hover:underline "
          >
            Entre.
          </Link>
        </p>
      </form>
    </main>
  );
}
