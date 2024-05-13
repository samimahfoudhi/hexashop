const db = require("../models");

exports.getAllClients = (req, res) => {
  db.Client.findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
exports.updateClient = (req, res) => {
  let { name, email, adress, phone } = req.body;
  db.Client.update({ name, email, adress, phone }, { where: { id: req.id } })
    .then((response) => {
      res.status(201).send("Updated");
    })
    .catch((err) => {
      res.status(400).json({ msg: "Failed to update" });
    });
};
