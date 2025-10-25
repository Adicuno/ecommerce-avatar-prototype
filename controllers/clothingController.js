const Clothing = require("../models/Clothing");

// @desc    Get all clothing items (catalog)
// @route   GET /api/clothing
const getAllClothing = (req, res) => {
  try {
    const clothing = Clothing.findAll();
    res
      .status(200)
      .json({ success: true, count: clothing.length, data: clothing });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Get a single clothing item
// @route   GET /api/clothing/:id
const getClothingItem = (req, res) => {
  try {
    const item = Clothing.findById(req.params.id);

    if (!item) {
      return res
        .status(404)
        .json({ success: false, error: "Clothing item not found" });
    }

    res.status(200).json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

module.exports = {
  getAllClothing,
  getClothingItem,
};
