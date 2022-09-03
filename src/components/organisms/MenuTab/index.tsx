import React from "react";
import tw from "twin.macro";
import { Anchor } from "../../atoms/Anchor";
import { Box } from "../../atoms/Box";

export const MenuTab: React.FC = () => {
    return (
        <nav>
            <Box css={[tw`flex m-auto height[10svh] justify-around`]} limited>
                <div css={tw`w-2/5 m-3 bg-yellow-300 rounded-2xl`} ><Anchor href={"/"}>Button</Anchor></div>
                <div css={tw`w-2/5 m-3 bg-yellow-300 rounded-2xl`}><Anchor href={"/"}>Button</Anchor></div>
            </Box>
        </nav>
    )
}