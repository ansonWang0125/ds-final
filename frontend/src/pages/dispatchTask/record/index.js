import { useEffect, useState } from "react";
import { fetchTasks } from "functions/contract";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { UseAddressContext } from "@context/addressCtx";
import { MuiTitle } from "@components";
import { TaskInfo } from "@containers";

export default function Record() {
  const [tasks, setTasks] = useState([]);
  const { address } = UseAddressContext();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchTasks(address);
      setTasks(res);
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
              <MuiTitle>Record</MuiTitle>
              <TaskInfo tasks={tasks} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
