import Button from "@mui/material/Button";

export default function MuiButton({ children, ...restProps }) {
  return (
    <Button color="inherit" {...restProps}>
      {children}
    </Button>
  );
}
