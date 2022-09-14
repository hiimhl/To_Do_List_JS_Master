import React from "react";
import styled from "styled-components";

import { useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories } from "../atoms";

const MyLi = styled.li`
  background-color: red;
  display: flex;
  span {
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
      <span>{text}</span>
      <div>
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO} onClick={onClick}>
            To Do
          </button>
        )}
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={onClick}>
            Doing
          </button>
        )}

        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClick}>
            Done
          </button>
        )}
      </div>
    </MyLi>
  );
}

export default ToDo;
