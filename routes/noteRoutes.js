const express = require("express");
const noteRouter = express.Router();
const { NoteModel } = require("../model/noteModel");

noteRouter.get("/", async (req, res) => {
  try {
    const data = await NoteModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

noteRouter.post("/add", async (req, res) => {
  try {
    const data = new NoteModel(req.body);
    await data.save();
    res.status(200).send("Note Added");
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

noteRouter.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await NoteModel.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send("Note Added");
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

noteRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await NoteModel.findByIdAndDelete({ _id: id });
    res.status(200).send("Note Deleted");
  } catch (err) {
    res.status(400).send({ msg: err.message });
  }
});

module.exports = { noteRouter };
