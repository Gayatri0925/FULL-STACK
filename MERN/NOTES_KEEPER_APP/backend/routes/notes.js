const express = require("express");
const router = express.Router();
const Note = require("../models/Note");

router.get("/", async (req,res)=>res.json(await Note.find()));
router.post("/", async (req,res)=>res.json(await new Note(req.body).save()));
router.delete("/:id", async (req,res)=>{ await Note.findByIdAndDelete(req.params.id); res.json({message:"Deleted"}); });

module.exports = router;
