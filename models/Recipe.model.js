const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/recipe-app')
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: String,
  level: String,
  ingredients:[],
  cuisine: String,
  dishType: String,
  image: String,
  duration: Number,
  creator: String,
  created: Date,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
