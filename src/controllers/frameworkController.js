const Framework = require("../models/frameworkModel");
const Language = require("../models/languageModel");
const { body, validationResult } = require("express-validator");

exports.framework_list = function (req, res) {
  Framework.get()
    .then((framework) => {
      res.status(200).json(framework);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.framework_add = [
  body("name")
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Framework name must have 3 characters minimum")
    .isAlphanumeric()
    .withMessage("Framework name must be alpha numeric characters"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json(errors);
    } else {
      const languageId = parseInt(req.body.language_id);
      Language.get()
        .where({ id: languageId })
        .then((result) => {
          if (result.length === 1) {
            Framework.add(req.body)
              .then((framework) => {
                res.status(200).json(framework);
              })
              .catch((err) => {
                res.status(500).json({ Error: err });
              });
          } else {
            res.status(500).json({ Error: "Incorrect language ID" });
          }
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  },
];

exports.framework_delete = function (req, res) {
  Framework.remove(parseInt(req.params.id))
    .then((framework) => {
      res.status(200).json(framework);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.framework_update = function (req, res) {
  const id = parseInt(req.params.id);
  const framework = req.params.body;

  Framework.update(id, framework)
    .then((framework) => {
      res.status(200).json(framework);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};
