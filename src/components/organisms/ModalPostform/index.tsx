import React from "react";
import tw from "twin.macro";
import { Box } from "../../atoms/Box";
import { Text } from "../../atoms/Text";

export const ModalPostform: React.FC = () => {
    return (
        <Box css={tw`bg-white w-4/5 h-4/5 rounded-2xl`} limited>
            <Text css={tw`text-center text-2xl`}>投稿する</Text>
        </Box>
    )
}