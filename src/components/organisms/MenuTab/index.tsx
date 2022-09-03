import React from "react";
import tw from "twin.macro";
import { Anchor } from "../../atoms/Anchor";
import { Box } from "../../atoms/Box";

export const MenuTab: React.FC = () => {
    return (
        <nav>
            <Box css={[tw`m-auto height[10svh] `]} limited>
                <ol css={tw`flex justify-around h-full w-full`}>
                    <li css={tw`w-2/5 h-2/3 m-auto bg-yellow-300 rounded-2xl`}><Anchor href={"/"}>Button</Anchor></li>
                    <li css={tw`w-2/5 h-2/3 m-auto bg-yellow-300 rounded-2xl`}><Anchor href={"/"}>Button</Anchor></li>
                </ol>
            </Box>
        </nav>
    )
}