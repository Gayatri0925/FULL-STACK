const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");

router.get("/", async (req, res) => res.json(await Feedback.find()));

router.post("/", async (req, res) => res.json(await new Feedback(req.body).save()));

router.delete("/:id", async (req, res) => {
  await Feedback.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
