const express = require("express");

const router = express.Router();

const adminControllers = require("./controllers/adminControllers");
const userControllers = require("./controllers/userControllers");
const advertControllers = require("./controllers/advertControllers");
const plantControllers = require("./controllers/plantControllers");

const authServices = require("./services/authControllers");

const auth = require("./middlewares/auth");

router.get("/admin", adminControllers.getAllAdmin);

router.get("/user", userControllers.getAllUsers);
router.get("/user/:id", userControllers.read);
router.put("user/:id", auth.hashPassword, userControllers.updateUser);
router.post(
  "/user",
  auth.validateUser,
  auth.hashPassword,
  userControllers.postUser
);
router.delete("/user/:id", userControllers.deleteUser);

router.post("/login", auth.checkEmailIfExist, authServices.verifyPassword);

router.get("/advert", advertControllers.getAllAdverts);
router.get("/advert/:id", advertControllers.read);
router.get("./advert/label/:label", advertControllers.searchByLabel);
router.get("./advert/city/:city", advertControllers.searchByCity);
router.get("./advert/county/:county", advertControllers.searchByCounty);
router.put("advert/:id", advertControllers.updateAdvert);
router.post("/advert", advertControllers.postAdvert);
router.delete("/advert/:id", advertControllers.deleteAdvert);

router.get("/plant", auth.checkIfGoodUser, plantControllers.getAllPlants);
router.get("/plant/:id", auth.checkIfGoodUser, plantControllers.read);
router.put("plant/:id", auth.checkIfGoodUser, plantControllers.updatePlant);
router.post("/plant", auth.checkIfGoodUser, plantControllers.postPlant);

module.exports = router;
