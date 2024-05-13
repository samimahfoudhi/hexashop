const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  const { email, role, password, name, adress, phone } = req.body;

  db.User.count({ where: { email: email } })
    .then((count) => {
      if (count !== 0) {
        return res.status(400).json({ error: "This email is already used" });
      }

      return bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => {
      return db.User.create({
        email: email,
        role: role,
        password: hashedPassword,
      })
        .then((user) => {
          if (role === "Client") {
            return db.Client.create({
              email: email,
              role: role,
              password: hashedPassword,
              name: name,
              adress: adress,
              phone: phone,
            });
          }
          return user;
        })
        .then((user) => {
          if (role === "Admin") {
            return db.Admin.create({
              email: email,
              role: role,
              password: hashedPassword,
              name: name,
              adress: adress,
              phone: phone,
            });
          }
          return user;
        });
    })
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

const secretKey = "this is my first token";
exports.login = (req, res) => {
  db.User.findOne({ where: { email: req.body.email } }).then((user) => {
    if (!user) {
      res.status(400).json("invalid email or password");
    } else {
      bcrypt.compare(req.body.password, user.password).then((same) => {
        if (same) {
          let token = jwt.sign(
            { id: user.id, userName: "username" },
            secretKey,
            { expiresIn: "1h" }
          );

          res
            .status(200)
            .json({ message: "Login successful", token: token, user: user });
        } else {
          res.status(401).json("invalid email or password");
        }
      });
    }
  });
};
exports.getAllUsers = (req, res) => {
  db.User.findAll()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(402).json(err);
    });
};
exports.deleteUser = (req, res) => {
  db.User.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(201).json(response))
    .catch((err) => res.status(400).json(err));
};
exports.deleteAllUsers = (req, res) => {
  db.User.destroy({ where: {} })
    .then(() => {
      return db.Client.destroy({ where: {} });
    })

    .then(() => {
      res.status(202).json({ msg: "Toutes les données ont été supprimées" });
    })
    .catch((err) => {
      res.status(403).json(err);
    });
};
exports.updateUser = (req, res) => {
  db.User.update(
    {
      email: req.body.email,
      password: req.body.password,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(201).json(response))
    .catch((err) => {
      res.status(404).json(err);
    });
};
