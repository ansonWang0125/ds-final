import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.listen(8080, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", 8080);
});
