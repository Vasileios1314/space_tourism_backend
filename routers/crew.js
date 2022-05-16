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

module.exports = router;
