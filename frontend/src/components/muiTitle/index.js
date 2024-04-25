import Typography from "@mui/material/Typography";

function MuiTitle({ children }) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
}

export default MuiTitle;
