import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

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
        // 아이디로 위치를 찾고 그 위치를 기준으로 앞과 뒤로 나누어 자른 후,
        // 수정된 값과 붙여서 새로운 array를 만듦.
        ...prevToDos.slice(0, targetIndex),
        newToDo,
        ...prevToDos.slice(targetIndex + 1),
      ];
    });
    // setToDos((prevToDos) => {
    //   return prevToDos.map((toDo) =>
    //   toDo.id === id ? { ...toDo, category: name as any } : toDo
    //   );
    //   }); 위와 같음. 불변성을 준수한 상태 변화에는 다양한 방법이 있다.
    console.log(setToDos);
  };

  return (
    <li>
      <span>{text}</span>

      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
