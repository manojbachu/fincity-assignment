import styled from "styled-components";

export const FormMainContainer = styled.div``;

export const FormHeading = styled.h1`
    text-align: center;
    font-weight: 500;

    line-height: 5px;
`;

export const HrLine = styled.hr`
    border: 3px solid #edbc34;
    border-radius: 3px;
    width: 100px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: auto;
    margin-top: 15px;
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: 10px;
    font-family: "Times New Roman";
    font-size: 17px;
`;

export const Input = styled.input`
    margin-bottom: 20px;
    height: 28px;
    border-radius: 5px;
    border: 1px solid;
    outline: none;
    padding-left: 10px;
`;

export const Description = styled.textarea`
    border-radius: 5px;
    border: 1px solid;
    outline: none;
`;

export const Add = styled.button`
    align-self: flex-end;
    margin-top: 15px;
    border: none;
    border-radius: 5px;
    padding: 8px 15px 8px 15px;
    background-color: #fcba03;
    font-weight: 400;
    font-size: 16px;
`;
