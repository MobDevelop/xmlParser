var fs = require("fs");
var xml2js = require("xml2js");
var parser = new xml2js.Parser();

exports.readFile = function(callback) {
  fs.readFile(__dirname + "/note.xml", function(err, data) {
    parser.parseString(data, function(err, result) {
      if (err) {
        return callback(err);
      }
      return callback(result);
    });
  });
};
