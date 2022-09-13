import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  id: number;
  category: "TO_DO" | "DOING" | "DONE"; // 할 일, 하고 있는 일, 한 일
}

//Atom
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

//Selector
export const toDoSelector = selector({
  //key와 get Fn이 필요함.

  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // atom 값을 가져옴.

    return [
      toDos.filter((toDo) => toDo.category === "TO_DO"),
      toDos.filter((toDo) => toDo.category === "DOING"),
      toDos.filter((toDo) => toDo.category === "DONE"),
    ];
  },
});
