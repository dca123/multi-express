import express from "express";

const app = express();

app.get("/info", (req, res) => {
  res.json({
    info: "Welcome to the API",
  });
});

app.listen(3000, () => {
  console.log("Server has started");
});
