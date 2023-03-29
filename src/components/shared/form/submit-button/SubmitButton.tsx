import { ComponentProps, FC } from "react";
import { Button, CircularProgress } from "@mui/material";

interface SubmitButtonProps extends ComponentProps<typeof Button> {
  isLoading: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ isLoading, children }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      endIcon={isLoading && <CircularProgress size="1rem" color="inherit" />}
    >
      {children}
    </Button>
  );
};

export default SubmitButton;
