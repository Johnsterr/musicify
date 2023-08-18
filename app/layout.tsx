import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Musicify",
    description: "Spotify clone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <UserProvider>
                    <ModalProvider products={[]} />
                    <SupabaseProvider>
                        <Sidebar>{children}</Sidebar>
                    </SupabaseProvider>
                </UserProvider>
            </body>
        </html>
    );
}

