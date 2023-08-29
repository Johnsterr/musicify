import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import Sidebar from "@/components/Sidebar";
import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Musicify",
    description: "Spotify clone",
};

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const userSongs = await getSongsByUserId();

    return (
        <html lang="en">
            <body className={font.className}>
                <ToasterProvider />
                <SupabaseProvider>
                    <UserProvider>
                        <ModalProvider products={[]} />
                        <Sidebar songs={userSongs}>{children}</Sidebar>
                        <Player />
                    </UserProvider>
                </SupabaseProvider>
            </body>
        </html>
    );
}

