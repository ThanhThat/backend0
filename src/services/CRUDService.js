const connection = require("../config/database");

const getAllUser = async () => {
  const [result, fields] = await connection.query(`SELECT * FROM users`);

  return result;
};

const getOneUser = async (userId) => {
  const [result, fields] = await connection.query(
    `SELECT * FROM users WHERE id=?`,
    [userId]
  );

  return result;
};

const createUser = async (email, name, city) => {
  const [rows, fields] = await connection.query(
    `INSERT INTO users(email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
};

const updateUser = async (id, name, email, city) => {
  const [result, fields] = await connection.query(
    `UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?`,
    [email, name, city, id]
  );

  return result;
};

const deleteById = async (id) => {
  const [result, fields] = await connection.query(
    `DELETE FROM users WHERE id=?`,
    [id]
  );
};

module.exports = {
  getAllUser,
  createUser,
  getOneUser,
  updateUser,
  deleteById,
};
