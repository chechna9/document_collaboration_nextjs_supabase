import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import "../globals.css";
import { Suspense } from "react";
import { Providers } from "./editor/Providers";
import { Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

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
      <body className={`${poppins.className} bg-myColor1`} >
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
