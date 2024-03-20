const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://UrbanBites:sdclk97mt@cluster0.obmipbb.mongodb.net/UrbanBites?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    const fetched_data = await mongoose.connection.db.collection('food_items');
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection('foodCategory');
    foodCategory.find({}).toArray(function (err, catData) {
      if (err) {
        console.error('Error fetching food category:', err);
      } else {
        global.food_items = data;
        global.foodCategory = catData;
      }
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

module.exports = mongoDB;
