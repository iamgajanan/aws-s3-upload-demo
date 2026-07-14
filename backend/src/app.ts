import express from "express";
import cors from "cors";

import uploadRoutes from "./routes/upload.routes";
import helmet from "helmet";
import morgan from "morgan";


const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "AWS S3 Upload API Running 🚀",
  });
});

app.use("/api/upload", uploadRoutes);

export default app;