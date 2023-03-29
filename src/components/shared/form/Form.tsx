import { Box, BoxProps } from "@mui/material";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

import Field from "./field/Field";
import SubmitButton from "./submit-button";

interface FormProps<T extends FieldValues> extends BoxProps {
  methods: UseFormReturn<T>;
  onSubmit: BoxProps["onSubmit"];
}

const Form = <T extends FieldValues>({
  methods,
  onSubmit,
  children,
  ...boxProps
}: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={onSubmit} {...boxProps}>
        {children}
      </Box>
    </FormProvider>
  );
};

Form.Field = Field;
Form.SubmitButton = SubmitButton;

export default Form;
