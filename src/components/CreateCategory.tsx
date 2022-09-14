import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, Categories } from "../atoms";

function CreateCategory() {
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };
  return (
    <div>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>할 일</option>
        <option value={Categories.DOING}>하는 중</option>
        <option value={Categories.DONE}>완료</option>
      </select>
      <button>카테고리 생성</button>
    </div>
  );
}

export default CreateCategory;
