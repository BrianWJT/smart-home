const mysql = require('../config/db');
const firebaseDB = require('../config/firebase');

exports.toggleDevice = (req, res) => {
  const { buttonId, status } = req.body;

  // 1. Update MySQL
  mysql.query(
    'UPDATE devicebutton SET status = ? WHERE button_id = ?',
    [status, buttonId],
    (err) => {
      if (err) return res.status(500).json({ error: err });

      // 2. Sync with Firebase
      firebaseDB.ref('deviceButtons/' + buttonId).set({ status });

      res.json({ message: "Device updated successfully" });
    }
  );
};