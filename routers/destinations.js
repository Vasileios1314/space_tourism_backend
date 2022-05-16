const { Router } = require("express");
const Destination = require("../models").destination;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const destination = await Destination.findAll();

    res.send(destination);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const destinationId = parseInt(req.params.id);
    const destinationById = await Destination.findByPk(destinationId);

    res.send(destinationById);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
