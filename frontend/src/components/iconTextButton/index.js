import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function IconTextButton({ icon, text, onClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={icon} onClick={onClick}>
        {text}
      </Button>
    </Stack>
  );
}
