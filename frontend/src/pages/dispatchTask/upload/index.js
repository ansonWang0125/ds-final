import { useState } from "react";
import ProvideInfo from "./provideInfo";
import SelectGpu from "./selectGpu";

export default function Upload() {
  const [gpuSelected, setGpuSelected] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const [gpuClusterSize, setGpuClusterSize] = useState(0);
  const handleChangeGpuSelected = (newGpuSelected, id, clusterSize) => {
    setGpuSelected(newGpuSelected);
    setSelectedId(id);
    setGpuClusterSize(clusterSize);
  };

  return (
    <div className="w-full h-full">
      {gpuSelected ? (
        <ProvideInfo selectedId={selectedId} gpuClusterSize={gpuClusterSize} />
      ) : (
        <SelectGpu handleChangeGpuSelected={handleChangeGpuSelected} />
      )}
    </div>
  );
}
