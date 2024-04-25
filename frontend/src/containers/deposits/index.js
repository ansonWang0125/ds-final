import Typography from "@mui/material/Typography";
import { MuiTitle } from "@components";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <>
      <MuiTitle>Recent Deposits</MuiTitle>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <button
          type="button"
          style={{ color: "primary", textDecoration: "none", cursor: "pointer" }}
          onClick={preventDefault}
        >
          View balance
        </button>
      </div>
    </>
  );
}
