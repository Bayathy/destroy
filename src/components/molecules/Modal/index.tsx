import React from "react";
import tw from "twin.macro";
import { Component } from "../../../model/component";
import { Box } from "../../atoms/Box";

export const Modal: React.FC<Component<"div">> = ({ children, css, ...rest }) => {
    return (
        <Box css={[tw`fixed top-0 left-0 right-0 bottom-0 m-auto width[90svh]`, css]} {...rest} limited>
            {children}
        </Box>
    )
}

export const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return ReactDOM.createPortal(children, document.querySelector("#root"))
}