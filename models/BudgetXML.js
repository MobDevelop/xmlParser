const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const xml = new Schema(
  {
    created: { type: Date, required: true, default: Date.now },
    budget: {
      detail: Object
    }
  },
  { collection: "xmls" }
);

module.exports = mongoose.model("xmlSchema", xml);
