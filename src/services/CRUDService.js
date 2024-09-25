const connection = require("../config/database");

const getAllUser = async () => {
  const [result, fields] = await connection.query(`SELECT * FROM users`);

  return result;
};

const getOneUser = async (userId) => {
  const [result, fields] = await connection.query(
    `SELECT * FROM users WHERE id=?`,
    [userId.id]
  );

  return result;
};

const createUser = async (email, name, city) => {
  const [rows, fields] = await connection.query(
    `INSERT INTO users(email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
};

module.exports = {
  getAllUser,
  createUser,
  getOneUser,
};
