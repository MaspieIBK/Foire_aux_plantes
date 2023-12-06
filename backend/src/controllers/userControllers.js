const models = require("../models");

const getAllUsers = (req, res) => {
  models.user
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
  models.user
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

const postUser = (req, res) => {
  const { pseudo, email, hashedPassword } = req.body;

  models.user
    .insert(pseudo, email, hashedPassword)
    .then(([result]) => {
      console.info(result);
      res.status(200).json({ message: "Compte crée avec succès", email });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err.errno,
      });
    });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.info("ID qui est dans mes params :", id);
  const { pseudo, email, hashedPassword } = req.body;
  console.info("Pseudo :", pseudo);
  console.info("Email :", email);
  console.info("hashedPassword :", hashedPassword);

  models.user.update(pseudo, email, hashedPassword, id).then(([result]) => {
    console.info(result);
    res
      .status(200)
      .json({
        Message: "Compte modifié avec succès",
      })
      .catch((err) => {
        console.info(err);
        res.status(500).json({
          Message: "Erreur lors de la modification",
        });
      });
  });
};

const deleteUser = (req, res) => {
  models.user
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

module.exports = { getAllUsers, read, postUser, updateUser, deleteUser };
