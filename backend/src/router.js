const express = require("express");

const router = express.Router();

const adminControllers = require("./controllers/adminControllers");
const userControllers = require("./controllers/userControllers");
const advertControllers = require("./controllers/advertControllers");
const plantControllers = require("./controllers/plantControllers");

router.get("/admin", adminControllers.getAllAdmin);

router.get("/user", userControllers.getAllUsers);
router.get("/user/:id", userControllers.read);
router.put("user/:id", userControllers.updateUser);
router.post("/user", userControllers.postUser);
router.delete("/user/:id", userControllers.deleteUser);

router.get("/advert", advertControllers.getAllAdverts);
router.get("/advert/:id", advertControllers.read);
router.get("./advert/label/:label", advertControllers.searchByLabel);
router.get("./advert/city/:city", advertControllers.searchByCity);
router.get("./advert/county/:county", advertControllers.searchByCounty);
router.put("advert/:id", advertControllers.updateAdvert);
router.post("/advert", advertControllers.postAdvert);
router.delete("/advert/:id", advertControllers.deleteAdvert);

router.get("/plant", plantControllers.getAllPlants);
router.get("/plant/:id", plantControllers.read);
router.put("plant/:id", plantControllers.updatePlant);
router.post("/plant", plantControllers.postPlant);

module.exports = router;
