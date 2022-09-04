import React from "react";
import { Header, HeaderProparty } from "../../organisms/Header";


export type ListLayout = {
    children: React.ReactNode
} & HeaderProparty

export const ListLayout: React.FC<ListLayout> = ({
    Headertitle,
    children
}) => {
    return (
        <>
            <Header isHomeLayout={false} Headertitle={Headertitle} />
            <main>
                {children}
            </main>
        </>
    )
}