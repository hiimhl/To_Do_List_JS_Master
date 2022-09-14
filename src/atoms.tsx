import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

//enum - 열거형 - 원하는 타입을 정확하게 정하는 것. - 실수할 일이 없어짐
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

// LocalStorage - 저장
const { persistAtom: toDos } = recoilPersist({
  key: "recoil-persist", // this key is using to store data in local storage
  storage: localStorage, // configurate which stroage will be used to store the data
});

const { persistAtom: categories } = recoilPersist({
  key: "recoil-category",
  storage: localStorage,
});

export interface IToDo {
  text: string;
  id: number;
  category: string;
}
export interface ICaTe {}

//Atom
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [toDos],
});

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const categoryAdd = atom({
  key: "add",
  default: ["TO_DO", "DOING", "DONE"],
  effects_UNSTABLE: [categories],
});

//Selector
export const toDoSelector = selector({
  //key와 get Fn이 필요함.

  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // atom 값을 가져옴.
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
