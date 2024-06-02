import { useEffect, useState } from "react";
import { fetchToken, taskEventLog } from "functions/tokenContract";
import Box from "@mui/material/Box";
import { UseAddressContext } from "@context/addressCtx";
import { Deposits } from "@containers";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function Token() {
  const [token, setToken] = useState(0);
  const { address } = UseAddressContext();
  useEffect(() => {
    const fetchData = async () => {
      await taskEventLog();
      const res = await fetchToken(address);
      setToken(res);
    };
    fetchData();
  }, [address]);

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Deposits token={token} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
