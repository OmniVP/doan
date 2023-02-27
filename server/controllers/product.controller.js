const product = require("../models/product.model.js");
exports.findAll = (req, res) => {   
    product.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving product."
        });
      else res.send(data);
    });
  };
  