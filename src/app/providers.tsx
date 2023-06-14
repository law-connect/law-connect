"use client";
import { SessionProvider } from "next-auth/react";
import { ConfigProvider } from "antd";

export function Providers({ children }: React.PropsWithChildren<unknown>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#551227",
        },
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </ConfigProvider>
  );
}
