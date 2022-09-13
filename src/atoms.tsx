import { atom } from "recoil";

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
