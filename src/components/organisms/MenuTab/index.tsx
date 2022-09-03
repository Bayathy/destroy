import React from "react";
import tw from "twin.macro";
import { Anchor } from "../../atoms/Anchor";
import { Box } from "../../atoms/Box";

export const MenuTab: React.FC = () => {
    return (
        <nav css={tw`h-1/2`}>
            <Box css={[tw`m-auto h-full`]} limited>
                <ol css={tw`flex h-full justify-around w-full`}>
                    <li css={tw`w-2/5 h-2/3 m-auto bg-white rounded-2xl`}><Anchor href={"/"}>Button</Anchor></li>
                    <li css={tw`w-2/5 h-2/3 m-auto bg-white rounded-2xl`}><Anchor href={"/"}>Button</Anchor></li>
                </ol>
            </Box>
        </nav>
    )
}