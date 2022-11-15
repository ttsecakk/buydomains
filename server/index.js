import express from "express";
import namecheapRouter from "./namecheapRouter.js";
import cors from "cors";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api", namecheapRouter);

app.get("/", (req, res) => {
  res.status(200).json("Server is working!");
});

app.listen(PORT, () => console.log("SERVER STARTED"));
