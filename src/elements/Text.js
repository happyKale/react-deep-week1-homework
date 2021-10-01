import React from "react";
import styled from 'styled-components';

const Text = (props) => {
    const {children, size, color, bold, paddingLeft} = props;
    const styles = {
        children: children,
        size: size,
        color: color,
        bold: bold,
        paddingLeft: paddingLeft,
    }

    return (
        <React.Fragment>
            <P {...styles}>
                {children}
            </P>
        </React.Fragment>
    );
}

Text.defaultProps = {
    children: null,
    size: "16px",
    color: "#222831",
    bold: false,
    paddingLeft: false,
}

const P = styled.p`
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => (props.bold ? "600" : "400")};
    ${(props) => (props.paddingLeft ? `padding-left: ${props.paddingLeft}` : "")}
`;

export default Text;