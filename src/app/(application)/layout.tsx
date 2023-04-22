import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: React.PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
