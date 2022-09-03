import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import tw from "twin.macro";
import { Component } from "../../../model/component";
import { Box } from "../../atoms/Box";

export const Modal: React.FC<Component<"div">> = ({ children, css, ...rest }) => {
    return (
        <Box css={[tw`fixed w-screen flex items-center justify-center h-screen inset-0 m-auto bg-black/[.6]`, css]} {...rest}>
            {children}
        </Box>
    )
}

export const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [showPortal, setShowPortal] = useState(false);

    useEffect(() => {
        setShowPortal(true);
    }, []);

    if (!showPortal) {
        // eslint-disable-next-line unicorn/no-null
        return null;
    }
    // eslint-disable-next-line unicorn/prefer-query-selector
    return ReactDOM.createPortal(children, document.getElementById("__next")!)
}