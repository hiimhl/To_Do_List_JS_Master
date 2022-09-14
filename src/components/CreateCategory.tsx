import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoSelector, Categories } from "../atoms";
import styled from "styled-components";
import MyBtn from "./MyBtn";

const Container = styled.div`
  // height: 50px;
  margin: 20px 0;
  width: 100%;
  background-color: blue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  // justify-content: space-between;
  select {
    width: 200px;
  }
`;

function CreateCategory() {
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };

  //input 카테고리 값 저장
  const onSubmit = () => {
    // setCategory(e.currentTarget.value as any)
  };
  return (
    <Container>
      <select value={category} onInput={onInput}>
        <option value="NO" hidden disabled>
          --카테고리--
        </option>
        <option value={Categories.TO_DO}>할 일</option>
        <option value={Categories.DOING}>하는 중</option>
        <option value={Categories.DONE}>완료</option>
      </select>
      <MyBtn type="defult" text="추가하기" />
      <input type="text" />
    </Container>
  );
}

export default CreateCategory;
