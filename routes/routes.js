const router = require("express").Router();
// const { Router } = require("express");
const miscController = require("../controllers/misc.controllers");

router.get("/", miscController.index);

router.get("/drags", miscController.drags);

router.get("/drag/new", miscController.createDrag);
router.post("/drags", miscController.doCreateDrag);

router.get("/drags/:id", miscController.getDrag);

router.get("/drags/:id/edit", miscController.editDrag);
router.post("/drags/:id/edit", miscController.doEditDrag);


module.exports = router;