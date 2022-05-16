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

module.exports = router;
