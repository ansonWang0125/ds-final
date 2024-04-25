import Typography from "@mui/material/Typography";

export default function MuiTypography({ children, ...restProps }) {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} {...restProps}>
      {children}
    </Typography>
  );
}
