const express = require("express");
const app = express();
const port = 3000;

app.use(express.json({ limit: "50mb" }));

app.post("/api/stores", (req, res) => {
  let dbStores = req.body;
  res.send();
});

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
