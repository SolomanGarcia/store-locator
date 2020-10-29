const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const Store = require("./api/models/store");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

mongoose.connect(
  "mongodb+srv://Soloman:@cluster0.v31tf.mongodb.net/<dbname>?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json({ limit: "50mb" }));

app.post("/api/stores", (req, res) => {
  let dbStores = [];
  let stores = req.body;
  // UNx3kfeMgv8vT5WQ
  stores.forEach((store) => {
    dbStores.push({
      storeName: store.name,
      phoneNumber: store.phoneNumber,
      address: store.address,
      openStatusText: openStatusText,
      addressLines: store.addressLines,
      location: {
        type: "Point",
        coordinates: [store.coordinates.longitude, store.coordinates.latitude]
      }
    });
  });

  Store.create(dbStores, (err, stores) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(stores);
    }
  });
});

app.get("/api/stores", (req, res) => {
  Store.find({}, (err, stores) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(stores);
    }
  });
});

app.delete("/api/stores", (req, res) => {
  Store.deleteMany({}, (err) => {
    res.status(200).send(err);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
