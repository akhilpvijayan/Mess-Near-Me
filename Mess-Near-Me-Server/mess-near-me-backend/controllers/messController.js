const Mess = require("../models/messModel");

// Get all messes
exports.getMesses = async (req, res) => {
  try {
    const messes = await Mess.find();
    res.json(messes);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get a single mess by ID
exports.getMessById = async (req, res) => {
  try {
    const mess = await Mess.findById(req.params.id);
    if (!mess) return res.status(404).json({ error: "Mess not found" });
    res.json(mess);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create a new mess
exports.createMess = async (req, res) => {
  try {
    const newMess = new Mess(req.body);
      await newMess.save();
      res.status(201).json({ message: "Mess added successfully", data: newMess });
    } catch (err) {
      res.status(400).json({ message: "Error adding mess", error: err.message });
  }
};

// Update a mess
exports.updateMess = async (req, res) => {
  try {
    const updatedMess = await Mess.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMess) return res.status(404).json({ error: "Mess not found" });
    res.json(updatedMess);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a mess
exports.deleteMess = async (req, res) => {
  try {
    const deletedMess = await Mess.findByIdAndDelete(req.params.id);
    if (!deletedMess) return res.status(404).json({ error: "Mess not found" });
    res.json({ message: "Mess deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
