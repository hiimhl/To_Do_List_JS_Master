import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { categoryAdd } from "../atoms";
import MyBtn from "./MyBtn";

const MyForm = styled.form`
  display: flex;
  width: 58%;
  align-items: center;

  input {
    width: 80%;
    flex-shrink: 3;
    padding: 0 10px;
    height: 40px;
    border-radius: 5px;
    border: none;
    margin-right: 20px;
  }
`;

function AddCategory() {
  const { register, setValue, handleSubmit } = useForm();
  const setAddCategory = useSetRecoilState(categoryAdd);
  const handleValid = (data: any) => {
    const makeSpace_ = data.category.split(" ").join("_");
    setAddCategory((prev: any) => [...prev, makeSpace_]);
    setValue("category", "");
  };

  return (
    <MyForm onSubmit={handleSubmit(handleValid)}>
      <input {...register("category")} placeholder="Add Category" />
      <MyBtn text="Add" color="green" />
    </MyForm>
  );
}

export default AddCategory;
