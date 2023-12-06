const models = require("../models");

const getAllPlants = (req, res) => {
  models.plant
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.plant
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const postPlant = (req, res) => {
  const { label, specification } = req.body;

  models.advert
    .insert(label, specification)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Plante ajoutée avec succès" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};

const updatePlant = (req, res) => {
  const plant = req.body;
  plant.id = parseInt(req.params.id, 10);

  models.plant
    .update(plant)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { getAllPlants, read, postPlant, updatePlant };
