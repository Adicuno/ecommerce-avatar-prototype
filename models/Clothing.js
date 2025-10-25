const clothingData = require("../dummyData/clothes.json");

// This class simulates a read-only Mongoose model for the catalog.

class Clothing {
  static clothes = [...clothingData];

  // Simulates Clothing.find({})
  static findAll() {
    return Clothing.clothes;
  }

  // Simulates Clothing.findById(id)
  static findById(id) {
    return Clothing.clothes.find((item) => item.id === id);
  }

  // Simulates Clothing.find({ type: '...' })
  static findByType(type) {
    return Clothing.clothes.filter(
      (item) => item.type.toLowerCase() === type.toLowerCase()
    );
  }
}

module.exports = Clothing;
