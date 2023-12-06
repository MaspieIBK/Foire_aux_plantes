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
  const { state, when, picture, content, city, county } = req.body;

  models.advert
    .insert(state, when, picture, content, city, county)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Annonce ajoutée avec succès" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};

const updateAdvert = (req, res) => {
  const advert = req.body;
  advert.id = parseInt(req.params.id, 10);

  models.advert
    .update(advert)
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

const deleteAdvert = (req, res) => {
  models.advert
    .delete(req.params.id)
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
