const { Router } = require("express");
const Technology = require("../models").technology;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const technology = await Technology.findAll();

    res.send(technology);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const technologyId = parseInt(req.params.id);
    const technologyById = await Technology.findByPk(technologyId);

    res.send(technologyById);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
