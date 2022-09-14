import React from "react";
import styled from "styled-components";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { IToDo, toDoState, Categories, categoryAdd } from "../atoms";
import MyBtn from "./MyBtn";

const MyLi = styled.li`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 10px 0;

  .content {
    display: flex;
    justify-content: space-between;

    align-items: center;
    text-align: center;

    //text
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
  const categoryList = useRecoilValue(categoryAdd);

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

  //리스트 삭제
  const onRemove = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      setToDos((prevToDos) => {
        const targetIndex = prevToDos.findIndex((toDo) => toDo.id === id);
        // const newToDo = { text, id, category: name as any };

        return [
          ...prevToDos.slice(0, targetIndex),
          ...prevToDos.slice(targetIndex + 1),
        ];
      });
    }
  };

  // 현재 카테고리 리스트에서 제외하기
  const list = categoryList.filter((item) => item !== category);

  return (
    <MyLi>
      <div className="content">
        <span>{text}</span>

        <div className="category_btns">
          {list.map((it) => (
            <MyBtn //
              text={it}
              size="small"
              name={it}
              onClick={onClick}
            />
          ))}

          <MyBtn //
            text="삭제"
            color="remove"
            size="small"
            onClick={onRemove}
          />
        </div>
      </div>
    </MyLi>
  );
}

export default ToDo;
