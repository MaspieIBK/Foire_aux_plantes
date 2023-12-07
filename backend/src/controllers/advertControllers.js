const models = require("../models");

const getAllAdverts = (req, res) => {
  models.advert
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
  models.advert
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

const searchByLabel = (req, res) => {
  const { labelPlant } = req.params;
  models.advert.findByLabel(labelPlant).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

const searchByCity = (req, res) => {
  const { city } = req.params;
  models.advert.findByCity(city).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

const searchByCounty = (req, res) => {
  const { county } = req.params;
  models.advert.findByCounty(county).then(([rows]) => {
    if (rows[0] == null) {
      res.sendStatus(404);
    } else {
      res.send(rows);
    }
  });
};

const postAdvert = (req, res) => {
  const advert = req.body;

  models.advert
    .insert(advert)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Annonce ajoutée avec succès" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur de sauvegarde");
    });
};

const updateAdvert = (req, res) => {
  const { id } = req.params;
  const advert = req.body;

  console.error("test", advert);

  models.advert
    .update(advert, id)
    .then(([result]) => {
      console.info(result);
      res.status(200).send("L'annonce a bien été modifiée");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Erreur lors de la modification");
    });
};

const deleteAdvert = (req, res) => {
  const { id } = req.params;

  models.advert.delete(id).then(([result]) => {
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).send("Annonce supprimée avec succès");
    }
  });
};

module.exports = {
  getAllAdverts,
  read,
  searchByLabel,
  searchByCity,
  searchByCounty,
  postAdvert,
  updateAdvert,
  deleteAdvert,
};
