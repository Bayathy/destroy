import React from "react";
import tw from "twin.macro";
import { Box } from "../../atoms/Box";
import { Button } from "../../atoms/Button";

export const MenuTab: React.FC = () => {
    return (
        <nav>
            <Box limited>
                <Button css={tw`p-7 bg-yellow-300 rounded-3xl`}>Button</Button>
                <Button css={tw`p-7 bg-yellow-300 rounded-3xl`}>Button</Button>
            </Box>
        </nav>
    )
}