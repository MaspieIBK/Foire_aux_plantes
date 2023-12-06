const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(pseudo, email, hashedPassword) {
    return this.database.query(
      `INSERT INTO user (pseudo, email, hashedPassword) VALUES (?, ?, ?)`,
      [pseudo, email, hashedPassword]
    );
  }

  update(pseudo, email, hashedPassword) {
    return this.database.query(
      `UPDATE user SET pseudo = ?, email = ?, hashedPassword = ? WHERE id = ?`,
      [pseudo, email, hashedPassword]
    );
  }

  delete(id) {
    return this.database.query(`DELETE from user WHERE id = ?`, [id]);
  }
}

module.exports = UserManager;
