'user strict';
var sql = require('./db.js');

//product object constructor
var product = function(product){
    console.log(product);
    this.product = product.product;
    this.status = product.status;
    this.created_at = new Date();
};
product.getAllproduct = function getAllproduct(result) {
    sql.query("Select * from product", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('products : ', res);

            result(null, res);
        }
    });
};
module.exports= product;
