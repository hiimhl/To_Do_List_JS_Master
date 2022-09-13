import { atom, selector } from "recoil";

//enum - 열거형 - 원하는 타입을 정확하게 정하는 것. - 실수할 일이 없어짐
export enum Categories {
  "TO_DO" = "TO_DO", //값을 지정하지 않으면 기본적으로 0(인덱스)의 값을 가짐.
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

//Atom
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

//Selector
export const toDoSelector = selector({
  //key와 get Fn이 필요함.

  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState); // atom 값을 가져옴.
    const category = get(categoryState);

    //category에 따라 다른 값을 return함
    if (category === Categories.TO_DO)
      return toDos.filter((toDo) => toDo.category === Categories.TO_DO);
    if (category === Categories.DOING)
      return toDos.filter((toDo) => toDo.category === Categories.DOING);
    if (category === Categories.DONE)
      return toDos.filter((toDo) => toDo.category === Categories.DONE);
  },
});
