import React from "react";
import { useController } from "react-hook-form";
import { RecipeInput } from "./muiStyledComponents/styledComponents";

const NumberInput = (props) => {
  const { field } = useController(props);

  return (
    <div>
      <RecipeInput
        {...field}
        name={props.name}
        type="number"
        InputProps={{ inputProps: { min: 0 } }}
        onKeyPress={(e) => {
          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
      />
    </div>
  );
};
export default NumberInput;
