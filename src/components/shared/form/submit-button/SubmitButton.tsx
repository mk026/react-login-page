import { ComponentProps, FC } from "react";
import { Button, CircularProgress } from "@mui/material";

import classes from "./SubmitButton.module.css";

interface SubmitButtonProps extends ComponentProps<typeof Button> {
  isLoading: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({
  isLoading,
  children,
  className,
  ...buttonProps
}) => {
  return (
    <Button
      fullWidth
      type="submit"
      disabled={isLoading}
      endIcon={isLoading && <CircularProgress size="1rem" color="inherit" />}
      className={className ? classes.submit + " " + className : classes.submit}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
