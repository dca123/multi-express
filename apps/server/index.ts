import express from "express";
import { porkApi } from "../pork/app";
import { trpc } from "../beef/index";
import cors from "cors";

export const app = express();

app.use(cors());

app.get("/info", (req, res) => {
  res.json({
    info: "Welcome to the API",
  });
});

porkApi(app);
app.use("/v2", trpc);

app.listen(3000, () => {
  console.log("Server has started");
});
