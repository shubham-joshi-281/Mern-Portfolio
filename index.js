// File Imports
import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import CONNECT_DB from "./connectDB/connectDB.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// config dotenv file
dotenv.config();

// ES6 Using Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rest Object
const app = express();

// mideleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/build")));

// routes
app.use("/api/v1/user", userRouter);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// connect DataBase
CONNECT_DB();

// Server listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Is Running At PORT Number ${PORT}`);
});
