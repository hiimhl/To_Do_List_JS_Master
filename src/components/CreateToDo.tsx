import React from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";
import MyBtn from "./MyBtn";

const MyForm = styled.form`
  input {
    width: 200px;
    height: 40px;
    border-radius: 5px;
    border: none;
  }
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const setToDos = useSetRecoilState(toDoState);

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]); // Fn도 전달가능
    setValue("toDo", "");
  };

  return (
    <MyForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "Write a To Do" })}
        placeholder="Write a to do"
      />
      <MyBtn text="Add" color="red" />
    </MyForm>
  );
}

export default CreateToDo;
