import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { GpuInfo } from "@containers";
import { fetchClusters } from "functions/contract";
import { MuiTitle } from "@components";

export default function Dashboard() {
  const [clusters, setClusters] = useState([]);
  const disable = true;
  const handleFetchClusters = async () => {
    const newClusters = await fetchClusters();
    setClusters(newClusters);
    console.log("new cluster: ", newClusters);
  };
  useEffect(() => {
    handleFetchClusters();
  }, []);
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
              <MuiTitle>Current Provider</MuiTitle>
              <GpuInfo clusters={clusters} disable={disable} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
