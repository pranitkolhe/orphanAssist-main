const db = require("../config/db.js");

const User = {
  // Create a new user with callback to handle success or failure
  create: (data, callback) => {
    const query =
      "INSERT INTO users (name, email, password, phone) VALUES (?, ?, ?, ?)";
    db.query(
      query,
      [data.name, data.email, data.password, data.phone],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, result);
      }
    );
  },

  // Get user by ID with callback for handling result or error
  findById: (id, callback) => {
    const query = "SELECT * FROM users WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result[0]); // Assuming you want a single user
    });
  },

  // Get user by email with callback for handling result or error
  findByEmail: (email, callback) => {
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result[0]); // Assuming email is unique and only one user is returned
    });
  },
};

module.exports = User;
