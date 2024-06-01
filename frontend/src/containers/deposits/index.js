import Typography from "@mui/material/Typography";
import { MuiTitle } from "@components";
import { formatNowDate } from "@functions/util";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({ token }) {
  return (
    <>
      <MuiTitle>Recent Token</MuiTitle>
      <Typography component="p" variant="h4">
        ${token.toString()}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {formatNowDate()}
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
