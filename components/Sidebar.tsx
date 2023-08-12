import React from "react";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => <div>{children}</div>;

export default Sidebar;
