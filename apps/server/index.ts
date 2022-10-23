import express from "express";
import { porkApi } from "../pork/app";

export const app = express();

app.get("/info", (req, res) => {
  res.json({
    info: "Welcome to the API",
  });
});

porkApi(app);

app.listen(3000, () => {
  console.log("Server has started");
});
