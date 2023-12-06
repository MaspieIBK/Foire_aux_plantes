const AbstractManager = require("./AbstractManager");

class AdvertManager extends AbstractManager {
  constructor() {
    super({ table: "advert" });
  }

  findByLabel(labelPlant) {
    return this.database.query(`SELECT * FROM advert WHERE labelPlant LIKE ?`, [
      `${labelPlant}%`,
    ]);
  }

  findByCity(city) {
    return this.database.query(`SELECT * FROM advert WHERE city LIKE ?`, [
      `${city}%`,
    ]);
  }

  findByCounty(county) {
    return this.database.query(`SELECT * FROM advert WHERE county LIKE ?`, [
      `${county}%`,
    ]);
  }

  insert(state, when, picture, content, city, county) {
    return this.database.query(
      `INSERT INTO advert (state, when, picture, content, city, county) VALUES (?, ?, ?, ?, ?, ?)`,
      [state, when, picture, content, city, county]
    );
  }

  update(id, state, when, picture, content, city, county) {
    return this.database.query(
      `UPDATE advert SET state = ?, when = ?, picture = ?, content = ?, city = ?, county = ? WHERE id = ?`,
      [id, state, when, picture, content, city, county]
    );
  }

  delete(id) {
    return this.database.query(`DELETE from advert WHERE id = ?`, [id]);
  }
}

module.exports = AdvertManager;
