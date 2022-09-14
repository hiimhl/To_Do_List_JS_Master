import React, { useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, Categories, categoryAdd } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import AddCategory from "./AddCategory";
import MyBtn from "./MyBtn";

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
  border-bottom: 1px solid ${(props) => props.theme.DYellowColor};
  margin-bottom: 20px;

  h1 {
    margin: 20px 0;
    font-size: 3rem;
    font-family: ${(props) => props.theme.titleText};
    color: ${(props) => props.theme.greenColor};
  }
`;

const MyDiv = styled.div`
  display: flex;
  margin: 20px 0;
  width: 100%;
  justify-content: space-between;
`;

const MyUl = styled.ul`
  list-style: none;
  width: 100%;
  // border-top: 1px solid ${(props) => props.theme.DYellowColor};

  h2 {
    width: 100px;
    height: 30px;
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

const SelectDiv = styled.div`
  display: flex;
  width: 50%;
  align-items: center;

  select {
    text-align: center;
    font-family: "Do Hyeon", sans-serif;
    font-size: 16px;

    min-width: 120px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-right: 15px;
  }
`;

function ToDoList() {
  // const toDos = useRecoilValue(toDoState);
  const [show, setShow] = useState(false);
  const toDos = useRecoilValue(toDoSelector); //만들었던 3개의 array를 꺼는 것.
  const [category, setCategory] = useRecoilState(categoryState);
  const addOption = useRecoilValue(categoryAdd);

  //Select onChange
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  return (
    <Container className="ToDoList">
      <Header>
        <h1>My To Do List</h1>
      </Header>
      <CreateToDo />

      <MyDiv>
        <SelectDiv>
          <select value={category} onInput={onInput}>
            {addOption.map((it: any) => (
              <option key={it} value={it}>
                {it.split("_").join(" ")}
              </option>
            ))}
          </select>
          <MyBtn
            text="카테고리 추가"
            onClick={() => setShow(!show)}
            color={show ? "" : "green"}
          />
        </SelectDiv>
        {show && <AddCategory />}
      </MyDiv>

      <MyUl>
        <h2>{category.split("_").join(" ")} :</h2>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </MyUl>
    </Container>
  );
}

export default ToDoList;

// find to do based on id [2]
