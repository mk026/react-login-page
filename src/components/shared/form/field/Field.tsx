import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

import classes from "./Field.module.css";

type FormFieldProps = { name: string } & TextFieldProps;

const FormField: FC<FormFieldProps> = ({
  name,
  className,
  ...textFieldProps
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      error={!!errors[name]}
      helperText={errors[name]?.message as string}
      fullWidth
      className={className ? classes.field + " " + className : classes.field}
      {...textFieldProps}
    />
  );
};

export default FormField;
