const db = require("../config/db.js");

const Organization = {
  create: (data, callback) => {
    console.log(data);
    const query =
      "INSERT INTO organizations (name, email, password, phone, longitude , latitude) VALUES (?, ?, ?, ?, ? , ?)";
    db.query(
      query,
      [
        data.name,
        data.email,
        data.password,
        data.phone,
        data.location.longitude,
        data.location.latitude,
      ],
      (error, results) => {
        if (error) {
          return callback(error, null); // Pass the error to the callback
        }
        callback(null, results); // Pass the results to the callback
      }
    );
  },

  findById: (id, callback) => {
    const query = "SELECT * FROM organizations WHERE id = ?";
    db.query(query, [id], (error, results) => {
      if (error) {
        return callback(error, null); // Pass the error to the callback
      }
      callback(null, results[0]); // Pass the first result to the callback
    });
  },

  findByEmail: (email, callback) => {
    const query = "SELECT * FROM organizations WHERE email = ?";
    db.query(query, [email], (error, results) => {
      if (error) {
        return callback(error, null); // Pass the error to the callback
      }
      callback(null, results[0]); // Pass the first result to the callback
    });
  },
};

module.exports = Organization;
