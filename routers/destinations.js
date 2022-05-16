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

module.exports = router;
