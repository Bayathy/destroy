import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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