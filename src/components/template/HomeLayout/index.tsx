import React from "react";
import { Header } from "../../organisms/Header";
import { MenuTab } from "../../organisms/MenuTab";

export type HomeLayout = {
    children: React.ReactNode
}


export const HomeLayout: React.FC<HomeLayout> = ({ children }) => {
    return (
        <>
            <Header />
            <MenuTab />
            {children}
        </>
    )
}