import React from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, Categories } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";

const Container = styled.div`
  padding: 0px 20px;
  min-height: 100vh;
  margin: 0 auto;
  background-color: ${(props) => props.theme.bgColor};
  font-family: ${(props) => props.theme.textFont};
`;

const Header = styled.header`
  height: 10vh;
  display: felx;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;

  h1 {
    margin-top: 15px;
    font-size: 3rem;
    font-family: ${(props) => props.theme.titleText};
    color: ${(props) => props.theme.greenColor};
  }
`;

const MyDiv = styled.div``;
const MyUl = styled.ul`
  list-style: none;
`;

function ToDoList() {
  // const toDos = useRecoilValue(toDoState);
  const toDos = useRecoilValue(toDoSelector); //만들었던 3개의 array를 꺼는 것.

  console.log(toDos);

  return (
    <Container className="ToDoList">
      <Header>
        <h1>My To Do List</h1>
      </Header>
      <MyDiv>
        <CreateCategory />
        <CreateToDo />
      </MyDiv>
      <MyUl>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </MyUl>
    </Container>
  );
}

export default ToDoList;

// find to do based on id [2]
