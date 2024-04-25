import IconButton from "@mui/material/IconButton";

export default function MuiIconButton({ children, ...restProps }) {
  return (
    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} {...restProps}>
      {children}
    </IconButton>
  );
}
