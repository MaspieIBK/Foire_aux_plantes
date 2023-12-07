const AbstractManager = require("./AbstractManager");

class PlantManager extends AbstractManager {
  constructor() {
    super({ table: "plant" });
  }

  insert(plant) {
    return this.database.query(
      `INSERT INTO plant (label, specification) VALUES (?, ?)`,
      [plant.label, plant.specification]
    );
  }

  update(plant) {
    return this.database.query(
      `UPDATE plant SET label = ?, specification = ? WHERE id = ?`,
      [plant.label, plant.specification]
    );
  }
}

module.exports = PlantManager;
