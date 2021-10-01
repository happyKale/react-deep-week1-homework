import React from "react";
import styled from 'styled-components';

const Button = (props) => {
    const {width, height, border, bg, children, fontSize, onClick} = props;

    const styles = {
        children: children,
        bg: bg,
        width: width,
        height: height,
        border: border,
        fontSize: fontSize,
    }

    return (
        <React.Fragment>
            <Btn {...styles} onClick={onClick}>
                {children}
            </Btn>
        </React.Fragment>
    );
}

Button.defaultProps = {
    children: null,
    onClick: {},
    bg: "lightgray",
    width: "100px",
    height: "30px",
    border: "none",
    fontSize: "14px",
};

const Btn = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => props.border};
    background-color: ${(props) => props.bg};
    font-size: ${(props) => props.fontSize};
`;

export default Button;