var express = require("express");
var fetchProductsRouter = express.Router();
var cors = require("cors");
var url = require("url");
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

const databasename = "AfrunoDB";
var collectionList = [];
var documentItems = [];

var corsOptions = {
  origin: "https://192.168.0.185/getFurnitures",
  // origin: "http://localhost:8080/getFurnitures",
};
fetchProductsRouter.get(
  "/getFurnitures",
  cors(corsOptions),
  (req, res, next) => {
    res.json(documentItems);
  }
);
var corsOptions = {
  origin: "https://192.168.0.185/getFurnituresByName",
};
fetchProductsRouter.get(
  "/getFurnituresByName",
  cors(corsOptions),
  (req, res, next) => {
    console.log("Searching via " + req.query.name);
    var querryName = "" + req.query.name;
    var currentCategoryFurniture = [];
    for (const furn of documentItems) {
      if (furn.category === querryName) currentCategoryFurniture.push(furn);
    }
    if (currentCategoryFurniture === null)
      currentCategoryFurniture = documentItems;
    res.json(currentCategoryFurniture);
  }
);

module.exports = fetchProductsRouter;

function fetchUzermamePassrord(dummyString) {
  var actualusername = [
    "a",
    "d",
    "i",
    "t",
    "g",
    "u",
    "r",
    "u",
    "1",
    "8",
    "6",
    ":",
    "4",
    "D",
    "1",
    "5",
    "o",
    "1",
    "2",
    "l",
    "1",
    "2",
    "l",
    "%",
    "2",
    "6",
    "1",
    "4",
    "9",
  ];
  var str = "";
  for (var i = 0; i < 29; i++) str = str + actualusername[i];
  return str;
}

var uzermame = fetchUzermamePassrord(uzermame);
var urlToMongoDB =
  "mongodb+srv://" +
  uzermame +
  "@cluster0.lmoqi.mongodb.net/AfrunoDB?retryWrites=true&w=majority";

console.log("URL to connect to mongoDB : " + urlToMongoDB);
MongoClient.connect(urlToMongoDB)
  .then((client) => {
    const dbo = client.db(databasename);
    dbo.listCollections().toArray(function (err, collectionNames) {
      if (!err) {
        if (collectionNames.length > 0)
          for (const index in collectionNames) {
            var collectionName = collectionNames[index].name;
            console.log("Collection Name: " + collectionName);
            var cursor = dbo.collection(collectionName).find();
            cursor.forEach((item, err) => {
              if (err == undefined) {
                documentItems.push(item);
              }
            });
            collectionList.push(collectionName);
          }
      }
    });
  })
  .catch((err) => {
    console.log(
      "Found error in connecting and fetching db details\n Error details : " +
        err
    );
  });

// mongoose.connect(urlToMongoDB, () => {
//   console.log("connceted to mongoDB successfully");
// });
