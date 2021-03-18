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
