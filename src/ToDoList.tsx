import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  name: string;
  password: string;
  password1: string;
  extraError: string;
}

function ToDoList() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError, //에러를 발생시킴
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com", // input 창에 미리 고정된 값을 입력할 수 있음
    },
  });
  //register - 이 함수는 onChange Fn과 데이터를 저장하는 기능을 제공해줌.
  //watch - 저장된 데이터를 확인할 수 있음.
  //handleSubmit = 인자 2개를 받음. 데이터가 유효할 때 호출되는 함수, 유효x할때의 함수
  //꼭 함수를 실행하여 Fn를 보내야된다.
  //formState : 에러를 꺼내서 에러만 확인할 수 있따.

  const onValid = (data: IForm) => {
    //setError의 장점은 에러를 내가 지정할 수 있다는 것.
    if (data.password !== data.password1) {
      return setError(
        "password1",
        { message: "일치하지 않습니다." },
        { shouldFocus: true }
        //패스워드가 일치하지 않다면 메시지와 focus를 주기.
      );
    }
    setError("extraError", { message: "Server offline." });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        {/* <input
          {...register("toDo", { required: true, minLength: 5 })}
          placeholder="Write a to do"
        /> */}
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com allowed.",
            },
            minLength: 5,
          })}
          placeholder="Write a to do"
        />
        <span style={{ color: "red" }}>{errors?.email?.message}</span>
        <input
          {...register("name", {
            required: true,
            validate: {
              noCoco: (value) =>
                value.includes("coco") ? "coco는 사용하지 못합니다" : true,
              noHi: (value) =>
                value.includes("hi") ? "hi는 사용하지 못합니다" : true,
            },
          })}
          placeholder="Write a to do"
        />
        <input
          {...register("password", {
            required: "Error! Password is required!",
            minLength: {
              value: 5,
              message: "비밀번호가 너무 짧습니다...",
            },
          })}
          placeholder="passsssssword"
        />

        <input
          {...register("password1", {
            required: "Error! Password is required!",
            minLength: {
              value: 5,
              message: "비밀번호가 너무 짧습니다...",
            },
          })}
          placeholder="passsssssword"
        />
        <span style={{ color: "red" }}>{errors?.name?.message}</span>
        <span style={{ color: "red" }}>{errors?.password?.message}</span>
        <span style={{ color: "red" }}>{errors?.password1?.message}</span>
        <span style={{ color: "red" }}>{errors?.extraError?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
