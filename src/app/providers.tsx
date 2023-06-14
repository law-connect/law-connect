"use client";
import { SessionProvider } from "next-auth/react";
import { ConfigProvider } from "antd";

export function Providers({ children }: React.PropsWithChildren<unknown>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#551227",
          colorLink: "#551227",
          colorLinkActive: "#80374E",
          colorLinkHover: "#80374E",
          borderRadius: 2,
          borderRadiusSM: 2,
          borderRadiusLG: 2,
        },
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </ConfigProvider>
  );
}
