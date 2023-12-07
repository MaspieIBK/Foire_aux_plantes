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

  insert(advert) {
    return this.database.query(
      `INSERT INTO advert (state, when, picture, content, city, county) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        advert.state,
        advert.when,
        advert.picture,
        advert.content,
        advert.city,
        advert.county,
      ]
    );
  }

  update(advert, id) {
    return this.database.query(
      `UPDATE advert SET state = ?, when = ?, picture = ?, content = ?, city = ?, county = ? WHERE id = ?`,
      [
        advert.state,
        advert.when,
        advert.picture,
        advert.content,
        advert.city,
        advert.county,
        id,
      ]
    );
  }

  delete(id) {
    return this.database.query(`DELETE from advert WHERE id = ?`, [id]);
  }
}

module.exports = AdvertManager;
