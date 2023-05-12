const express = require("express");

const sumController = require("./controller/sum.js");

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

router.get("/sum", sumController);

module.exports = router;
