const userData = require("../dummyData/users.json");

// This class simulates the behavior of a Mongoose model,
// but uses the loaded JSON data for persistence (in-memory).

class User {
  static users = [...userData];

  // Simulates User.find({})
  static findAll() {
    return User.users;
  }

  // Simulates User.findById(id)
  static findById(id) {
    return User.users.find((user) => user.id === id);
  }

  // Simulates User.findByIdAndUpdate(id, updates)
  static updateProfile(id, updates) {
    const userIndex = User.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return null;
    }

    // Apply updates and ensure data types are correct
    const updatedUser = {
      ...User.users[userIndex],
      ...updates,
      height: updates.height
        ? parseFloat(updates.height)
        : User.users[userIndex].height,
      weight: updates.weight
        ? parseFloat(updates.weight)
        : User.users[userIndex].weight,
      updated: new Date().toISOString(),
    };

    User.users[userIndex] = updatedUser;
    return updatedUser;
  }
}

module.exports = User;
