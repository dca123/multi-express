import express from "express";
import { porkApi } from "../pork/app";
import { trpc } from "../beef/index";
export const app = express();

app.get("/info", (req, res) => {
  res.json({
    info: "Welcome to the API",
  });
});

app.use(trpc);
porkApi(app);

app.listen(3000, () => {
  console.log("Server has started");
});
