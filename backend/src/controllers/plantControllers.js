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
  const { id } = req.params;
  const plant = req.body;

  console.error("test", plant);

  models.plant
    .update(plant, id)
    .then(([result]) => {
      console.info(result);
      res.status(200).send("La fiche plante a bien été modifiée");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur lors de la modification");
    });
};

module.exports = { getAllPlants, read, postPlant, updatePlant };
