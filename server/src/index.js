import express from "express";
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";

const app = express();

const corsOptions = { optionsSuccessStatus: 200, credentials: true, origin: true };
app.use(cors(corsOptions));

app.use(express.json());

app.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: "/",
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60 * 1000
  }
}));
app.use(cookieParser("secret"));

app.use("/api/users", userRoutes);

app.listen(8080, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", 8080);
});
