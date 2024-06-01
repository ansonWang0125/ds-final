import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function TaskInfo({ tasks }) {
  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Provider</TableCell>
          <TableCell>Cluster Index</TableCell>
          <TableCell>Data image</TableCell>
          <TableCell>Train image</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.provider + task.client} hover style={{ cursor: "pointer" }}>
            <TableCell>{task.provider}</TableCell>
            <TableCell>{task.clusterIndex.toString()}</TableCell>
            <TableCell>{task.dataImage}</TableCell>
            <TableCell>{task.trainImage}</TableCell>
            <TableCell align="right">{task.status.toString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
