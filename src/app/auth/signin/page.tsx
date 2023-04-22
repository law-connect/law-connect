"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

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
    <main>
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <div>
          <input
            type="oab"
            name="oab"
            id="oab"
            placeholder="OAB"
            value={oab}
            onChange={(e) => setOab(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start"></div>
        </div>
        <button type="submit">Sign in</button>
      </form>
    </main>
  );
}
