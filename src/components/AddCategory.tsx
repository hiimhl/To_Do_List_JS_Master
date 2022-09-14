import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { toDoState, categoryAdd } from "../atoms";

function AddCategory() {
  const { register, setValue, handleSubmit } = useForm();
  const setAddCategory = useSetRecoilState(categoryAdd);
  const handleValid = (data: any) => {
    const makeSpace_ = data.category.split(" ").join("_");
    setAddCategory((prev) => [...prev, makeSpace_]);
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("category")} placeholder="Add Category" />
      <button>저장</button>
    </form>
  );
}

export default AddCategory;
