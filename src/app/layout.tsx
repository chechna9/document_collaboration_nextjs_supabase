import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import "../globals.css";
import { Suspense } from "react";
import { Providers } from "./editor/Providers";
export const metadata = {
  title: "Liveblocks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="px-20">
        <div>Root layout</div>
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
