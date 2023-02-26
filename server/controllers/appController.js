'use strict';

var product = require('../models/product.model.js');

exports.list_all_products = function(req, res) {
    product.getAllproduct(function(err, product) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', product);
        res.send(product);
    });
};


