import React from "react";
import styled from 'styled-components';

const Input = (props) => {
    const { children, type, labelSize, height, width, id, placeholder} = props;

    const styles ={
        height: height,
        width: width,
    }

    return (
        <InputBoxOutter>
            <LabelBox labelSize={labelSize}>
                {children}
            </LabelBox>
            <InputBox type={type} id={id} placeholder={placeholder} {...styles}/>
        </InputBoxOutter>
    );
}

Input.defaultProps = {
    children: null,
    type: "text",
    height: "100%",
    width: "100%",
}

const InputBoxOutter = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
`;

const InputBox = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    padding: 0 10px;
`;

const LabelBox = styled.label`
    display: inline-block;
    font-size: ${(props) => props.labelSize};
`;

export default Input;