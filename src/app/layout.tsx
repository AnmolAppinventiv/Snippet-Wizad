import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { ContextProvider } from "@/context";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snippet Wizard",
  description: "This is the offical snippet wizard developed by Noob dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ContextProvider>
        <html lang="en">
          <body>
            <main>{children}</main>
          </body>
        </html>
      </ContextProvider>
    </ClerkProvider>
  );
}

// NEXT MOVE
// ek array of objects jismai wo sari fieds ka data store hoga   usko show krna hai