import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Law Connect",
  description: "Law Connect: uma rede para advogados",
};

export default function RootLayout({
  children,
}: React.PropsWithChildren<unknown>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
