"use client";

import React from "react";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

interface LibraryProps {}

const Library: React.FC<LibraryProps> = () => {
    const onCLick = () => {
        // TODO: handler later
    };
    return (
        <div className="flex flex-col">
            <div className="pt-4 px-5 flex items-center justify-between">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist className="text-neutral-400" size={24} />
                    <p className="text-neutral-400 text-md font-medium">Your Library</p>
                </div>
                <AiOutlinePlus
                    onClick={onCLick}
                    size={20}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">List of songs</div>
        </div>
    );
};

export default Library;
