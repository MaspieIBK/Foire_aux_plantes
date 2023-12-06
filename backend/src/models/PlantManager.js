const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  constructor() {
    super({ table: "plant" });
  }

  // insert(label, specification) {
  //   return this.database.query(
  //     `INSERT INTO plant (label, specification) VALUES (?, ?)`,
  //     [label, specification]
  //   );
  // }

  update(label, specification) {
    return this.database.query(
      `UPDATE plant SET label = ?, specification = ? WHERE id = ?`,
      [label, specification]
    );
  }
}

module.exports = PlantManager;
