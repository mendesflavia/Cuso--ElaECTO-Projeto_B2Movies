const express = require('express');
const router = express.Router();
const controller = require("../controller/filmesController");

router.get("/", controller.listarTodosfilmes);
router.get("/:id", controller.pesquisaPorId);
router.post("/", controller.salvarfilmes);

module.exports = router;