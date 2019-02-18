var express = require("express");
var router = express.Router();
var readXML = require("../modules/readXML");
var xmlSchema = require("../models/BudgetXML");
/* GET home page. */

getChild = function(result) {
  Object.keys(result).forEach(key => {
    var value = result[key];
    console.log("---key:", key, "---");
    if (typeof value === "array") {
      for (array in value) {
        getChild(array);
      }
    }
    console.log(value);
    if (typeof value === "object") {
      getChild(value);
    } else {
      return;
    }
  });
};

router.get("/", function(req, res, next) {
  //console.log(readXML.readFile());
  readXML.readFile(function(result) {
    //console.log(result.budget.categories);
    //getChild(result.budget.categories);
    var budget = new xmlSchema({ budget: result });
    budget.save(function(err) {
      if (err) {
        if (err) {
          return handleError(err);
        }
      }
    });
    res.render("index", result);
  });
  //res.render("index", { title: "Express" });
});

module.exports = router;
