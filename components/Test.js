import * as React from "react";
import { useForm, useController } from "react-hook-form";
import NumberInput from "./NumberInput";

const Test = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      FirstName: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>useController</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <NumberInput control={control} name="FirstName"/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Test;
