import React from "react";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";
import MyBtn from "./MyBtn";

const MyLi = styled.li`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  // grid-template-columns: repeat(3, 3fr)
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .content {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 22px;
      padding-right: 50px;
    }
  }
  .category_btns {
    span {
      font-size: 13px;
      color: gray;
      padding-right: 20px;
    }
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  // Changing the Category
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      //Target에 name 값을 반환
      currentTarget: { name },
    } = event;

    setToDos((prevToDos) => {
      const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...prevToDos.slice(0, targetIndex),
        newToDo,
        ...prevToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <MyLi>
      <div className="content">
        <span>{text}</span>
        <MyBtn text="삭제" type="red" />
      </div>
      <div className="category_btns">
        <span>카테고리 변경하기 :</span>
        {category !== Categories.TO_DO && (
          <MyBtn name={Categories.TO_DO} onClick={onClick} text="To Do" />
        )}
        {category !== Categories.DOING && (
          <MyBtn name={Categories.DOING} onClick={onClick} text="Doing" />
        )}
        {category !== Categories.DONE && (
          <MyBtn name={Categories.DONE} onClick={onClick} text="Done" />
        )}
      </div>
    </MyLi>
  );
}

export default ToDo;
