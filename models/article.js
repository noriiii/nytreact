const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, trim: true, required: true },
  date: {type: String, default: Date.now},
  url: {type: String, required: true}
});

const Article = mongoose.model("Article", nytReact);

module.exports = Article;
