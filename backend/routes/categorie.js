const { categorie } = require("../models/categorie");

var express = require("express");
const router = express.Router();

router.post("/admin", async (req, res) => {
  const { subtheme } = req.body;

  let catego = new categorie({
    subtheme,
  });

  try {
    catego = await catego.save();
    res.send(catego);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
