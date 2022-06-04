const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
   
    return Recipe.deleteMany()
  })
  .then((Pesto) => {
    return Recipe.create({title:'Pesto',level:'Easy Peasy',ingredients:['basil','pinions','parmesan','oil'],cuisine:'Italian',dishType:'Lunch',image:'default',duration: 10, creator: 'Josep'})
  })
  .then(() => {
    console.log('Created: Pesto')
  })
  .then(() => {
    return Recipe.create(data)
  })
  .then(() => {
    return Recipe.insertMany(data)
  })
  .then((recipes) => {
  console.log (`${data.title}`)
  }) 
  
  .then(() => {
    return Recipe.findOneAndUpdate({title:'Rigatoni Ala Genovese'},{duration:100})
  })
  .then(() => {
    console.log('Updated Rigatoni')
  })
  
  .then(() => {
    return Recipe.deleteOne({title:'Carrot Cake'})
  })

  .then(() => {
    console.log('Carrot cake deleted')
  })

  .then(() => {
    mongoose.connection.close();
  })

  .then(() => {
    console.log ('Closed')
  })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });


 
