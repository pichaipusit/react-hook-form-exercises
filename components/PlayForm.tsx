"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
};

const PlayForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-black">
      <input defaultValue="test" {...register("name")} />

      <input {...register("email", { required: true })} />
      {errors.email ? (
        <span className="text-red-400 ml-3">Email required </span>
      ) : null}

      <input type="submit" />
    </form>
  );
};

export default PlayForm;
