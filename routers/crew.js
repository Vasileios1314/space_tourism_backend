const { Router } = require("express");
const Crew = require("../models").crew;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const crew = await Crew.findAll();

    res.send(crew);
  } catch (err) {
    console.log(err.message);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const crewId = parseInt(req.params.id);
    const crewById = await Crew.findByPk(crewId);

    res.send(crewById);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
