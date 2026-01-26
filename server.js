const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from Express ");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Express listening on ${PORT}`);
});
