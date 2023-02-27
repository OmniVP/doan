const sql = require("./db.js");

// constructor
const Product = function(product) {
  this.name_product = product.name_product;
  this.price = product.price;
  this.avatar = product.avatar;
};

Product.getAll = (result) => {
    let query = "SELECT * FROM product";
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("product: ", res);
      result(null, res);
    });
  };

  module.exports = Product;  