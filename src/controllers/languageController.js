const Languages = require("../models/languageModel");
const { body, validationResult } = require("express-validator");

exports.language_list = function (req, res) {
  Languages.get()
    .then((languages) => {
      res.status(200).json(languages);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.language_detail = function (req, res) {
  const id = req.params.id;
  Languages.get()
    .where({ id })
    .then((language) => {
      res.status(200).json(language);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.language_add = [
  body("name")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Language name must have 3 characters minimum"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      Languages.add(req.body)
        .then((language) => {
          res.status(200).json(language);
        })
        .catch((err) => {
          res.status(500).json({ Error: err });
        });
    }
  },
];

exports.language_delete = function (req, res) {
  const id = parseInt(req.params.id);
  Languages.remove(id)
    .then((language) => {
      res.status(200).json(language);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.language_update = function (req, res) {
  const id = parseInt(req.params.id);
  const language = req.body;
  Languages.update(id, language)
    .then((updated) => {
      res.status(200).json(updated);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};
