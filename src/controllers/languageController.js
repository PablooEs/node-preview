const Languages = require("../models/languageModel");

exports.language_list = function (req, res) {
  Languages.get()
    .then((languages) => {
      res.status(200).json(languages);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.language_add = function (req, res) {
  Languages.add(req.body)
    .then((language) => {
      res.status(200).json(language);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.language_delete = function (req, res) {
  Languages.remove(req.body)
    .then((language) => {
      res.status(200).json(language);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};

exports.language_update = function (req, res) {
  const id = req.params.id;
  const language = req.params.body;

  Languages.update(id, language)
    .then((language) => {
      res.status(200).json(language);
    })
    .catch((err) => {
      res.status(500).json({ Error: err });
    });
};
