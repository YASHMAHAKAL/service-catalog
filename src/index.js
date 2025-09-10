const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "orders-service" });
});

app.listen(port, () => {
  console.log(`Orders service running on port ${port}`);
});

