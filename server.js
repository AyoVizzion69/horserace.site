const express = require("express");
const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express + Caddy 🚀");
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Express listening on ${PORT}`);
});
