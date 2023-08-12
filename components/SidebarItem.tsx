import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, active, href }) => {
    return (
        <Link
            href={href}
            className={twMerge(
                `py-1 h-auto w-full flex flex-row items-center gap-x-4 text-md font-medium cursor-pointer text-neutral-400 hover:text-white transition`,
                active && "text-white",
            )}
        >
            <Icon size={24} />
            <p className="truncate w-full">{label}</p>
        </Link>
    );
};

export default SidebarItem;
