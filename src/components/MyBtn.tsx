import React from "react";
import styled from "styled-components";

interface IBtn {
  text: string;
  type?: string;
  onClick?: any;
  name?: any;
}

const Btn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px;
  // font-size: 18px;

  .red {
    background-color: red;
  }
`;

function MyBtn({ text, type, onClick, name }: IBtn) {
  return (
    <Btn name={name} onClick={onClick}>
      {text}
    </Btn>
  );
}

export default MyBtn;
