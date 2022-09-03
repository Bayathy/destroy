import React from "react";
import { Header } from "../../organisms/Header";

export type HomeLayout = {
    children: React.ReactNode
}


export const HomeLayout: React.FC<HomeLayout> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}