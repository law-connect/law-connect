import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: React.PropsWithChildren<unknown>) {
  return (
    <>
      <Header />
      <main className="grid place-center max-w-screen-lg m-auto py-20">
        {children}
      </main>
    </>
  );
}
