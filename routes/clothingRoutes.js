const express = require("express");
const {
  getAllClothing,
  getClothingItem,
} = require("../controllers/clothingController");

const router = express.Router();

router.route("/").get(getAllClothing); // GET /api/clothing

router.route("/:id").get(getClothingItem); // GET /api/clothing/:id

module.exports = router;
