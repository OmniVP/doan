module.exports = app => {
    const tutorials = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
    router.get("/", tutorials.findAll);
   
    app.use('/api/product', router);
  };