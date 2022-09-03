import React from "react";
import tw from "twin.macro";
import { Box } from "../../atoms/Box";
import { Text } from "../../atoms/Text";
import { MenuTab } from "../MenuTab";

export const Header: React.FC = () => {
    return (
        <header>
            <div css={tw`w-screen height[20svh] py-2 bg-yellow-300`}>
                <Box css={tw`m-auto h-1/2 flex justify-center items-center`} limited>
                    <span>
                        <Text css={tw`text-center text-4xl`}>GorouMap</Text>
                    </span>
                </Box>
                <MenuTab />
            </div>
        </header>
    )
}