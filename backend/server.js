const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Create Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

// Save route
app.post("/contact", async (req, res) => {
  try {
    await Contact.create(req.body);
    res.send("Message saved successfully!");
  } catch (err) {
    res.status(500).send("Error saving message");
  }
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});