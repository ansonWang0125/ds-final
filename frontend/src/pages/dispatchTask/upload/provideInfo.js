import { useState } from "react";
import { registerTask } from "functions/contract";
import { MuiButton } from "components";
import { Box, TextField, Typography } from "@mui/material";
import { UseAddressContext } from "@context/addressCtx";

export default function ProvideInfo({ selectedId, gpuClusterSize }) {
  const [dataImageUrl, setDataImageUrl] = useState("");
  const [trainingUrl, setTrainingUrl] = useState("");
  const { address } = UseAddressContext();

  const handleConfirm = async () => {
    const isSuccess = await registerTask(dataImageUrl, trainingUrl, selectedId, gpuClusterSize, address);
    console.log("is success: ", isSuccess);
  };
  // const
  const handleChangeDataImageUrl = (e) => {
    e.preventDefault();
    setDataImageUrl(e.target.value);
  };
  const handleChangeTrainingUrl = (e) => {
    e.preventDefault();
    setTrainingUrl(e.target.value);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-[60px] w-full h-screen">
      <Box
        noValidate
        autoComplete="off"
        className="flex flex-col items-start justify-center gap-[30px] w-full w-[80%] border-[1px] p-[30px] border-black"
      >
        <Typography variant="h5" gutterBottom>
          Training Task Information
        </Typography>
        <TextField
          id="standard-basic"
          className="w-full"
          label="Data Image URL"
          variant="standard"
          value={dataImageUrl}
          onChange={(e) => {
            handleChangeDataImageUrl(e);
          }}
        />
        <TextField
          id="standard-basic"
          className="w-full"
          label="Training Image URL"
          variant="standard"
          value={trainingUrl}
          onChange={(e) => {
            handleChangeTrainingUrl(e);
          }}
        />
        <MuiButton onClick={handleConfirm} className="ml-auto" variant="contained">
          Sent Task
        </MuiButton>
      </Box>
    </div>
  );
}
