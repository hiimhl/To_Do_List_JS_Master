import React from "react";
import styled from "styled-components";

interface IBtn {
  text: string;
  // type?: string;
  onClick?: any;
  name?: any;
  color?: string;
  size?: string;
}

const Btn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  background-color: ${(props) => props.color};
  font-family: "Do Hyeon", sans-serif;

  &.remove {
    background-color: ${(props) => props.theme.DYellowColor};
    transition: background-color 0.3s ease-in, color 0.3s ease-in;

    &:hover {
      color: white;
      background-color: red;
    }
  }

  &.green {
    background-color: ${(props) => props.theme.greenColor};
    color: white;
  }

  &.small {
    // background-color: red;
    padding: 5px;
    font-size: 14px;
    margin-left: 10px;
  }
`;

function MyBtn({ text, onClick, name, color, size }: IBtn) {
  return (
    <Btn name={name} className={`${color} ${size}`} onClick={onClick}>
      {text}
    </Btn>
  );
}

export default MyBtn;
