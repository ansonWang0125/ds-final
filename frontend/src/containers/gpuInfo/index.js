import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function GpuInfo({ clusters, handleChangeGpuSelected, disable }) {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Provider</TableCell>
          <TableCell>GPU ID</TableCell>
          <TableCell>Cluster Size</TableCell>
          <TableCell align="right">Available or Not</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clusters.map((cluster) => (
          <TableRow
            key={cluster.provider + cluster.provider}
            onClick={() => {
              if (!disable) handleChangeGpuSelected(true, cluster.gpuId, cluster.clusterSize);
            }}
            hover
            style={{ cursor: "pointer" }}
          >
            <TableCell>{cluster.provider}</TableCell>
            <TableCell>{cluster.gpuId.toString()}</TableCell>
            <TableCell>{cluster.clusterSize.toString()}</TableCell>
            <TableCell align="right">{cluster.available.toString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
