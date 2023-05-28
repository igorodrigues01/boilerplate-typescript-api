import express from "express";

const PORT = 3333;
const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log("🚀 Is Running server http://localhost:3333");
});
