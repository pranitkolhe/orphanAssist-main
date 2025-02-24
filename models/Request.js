const db = require("../config/db.js");

const Request = {
  // Create a new request (callback handles success or error)
  createRequest: (data, callback) => {
    const query =
      "INSERT INTO requests (user_id, photo, latitude , longitude,organization_id) VALUES (?, ?, ?,?,?)";
    db.query(
      query,
      [
        data.userId,
        data.photo,
        data.latitude,
        data.longitude,
        data.organization_id,
      ],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, result);
      }
    );
  },

  // Get all pending requests for an organization (callback handles result)
  getPendingRequests: (orgId, callback) => {
    const query =
      'SELECT * FROM requests WHERE organization_id = ? AND status = "pending"';
    db.query(query, [orgId], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Update the status of a specific request (callback handles success or error)
  updateRequestStatus: (requestId, status, callback) => {
    const query = "UPDATE requests SET status = ? WHERE id = ?";
    db.query(query, [status, requestId], (err, result) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, result);
    });
  },

  // Get all requests made by a specific user (callback handles result)
  findByUserId: (userId, callback) => {
    const query = "SELECT * FROM requests WHERE user_id = ?";
    db.query(query, [userId], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      console.log(results);
      callback(null, results);
    });
  },
  findByOrgId: (orgId, callback) => {
    const query = "SELECT * FROM requests WHERE organization_id = ?";
    db.query(query, [orgId], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};

module.exports = Request;
