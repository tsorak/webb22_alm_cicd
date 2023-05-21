const express = require("express");

const sumController = require("./controller/sum.js");
const multController = require("./controller/mult.js");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

router.get("/sum", sumController);

router.get("/mult", multController);

module.exports = router;
