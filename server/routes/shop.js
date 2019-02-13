const express = require("express");
const db = require("../db/db");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  db.displayCakes().then(cakes => {
    res.json(cakes);
  });
});

module.exports = router;
