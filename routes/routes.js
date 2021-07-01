const router = require("express").Router();
const { Router } = require("express");
const miscController = require("../controllers/misc.controllers");

router.get("/", miscController.index);

router.get("/drags", miscController.drags)
router.get("/drags/:id", miscController.getDrag)


module.exports = router