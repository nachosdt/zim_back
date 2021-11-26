const { Router } = require("express");
const fotosCtrl = require("../controllers/fotos.controller");

const router = Router();

router.get("/fotos",fotosCtrl.getFotos);
router.post("/fotos", fotosCtrl.postFoto);
router.delete("/fotos", fotosCtrl.deleteFoto);
router.put("/fotos", fotosCtrl.putFoto);

module.exports = router;