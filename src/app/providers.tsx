"use client";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: React.PropsWithChildren<unknown>) {
  return <SessionProvider>{children}</SessionProvider>;
}
