import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { GpuInfo } from "@containers";
import { fetchClusters } from "functions/contract";
import { MuiTitle } from "@components";

export default function SelectGpu({ handleChangeGpuSelected }) {
  const [clusters, setClusters] = useState([]);
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
        flexGrow: 1,
        height: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <MuiTitle>Select GPU</MuiTitle>
              <GpuInfo clusters={clusters} handleChangeGpuSelected={handleChangeGpuSelected} disable={false} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
