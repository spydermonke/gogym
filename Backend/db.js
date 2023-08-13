const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sunny2001pratham:Obf10AJiTmgj2aTD@cluster0.ybeahu7.mongodb.net/gogym?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("exercises");
    const category_data = await mongoose.connection.db.collection("category");
    const days_data = await mongoose.connection.db.collection("days");
    const user_data = await mongoose.connection.db.collection("users");

    const data = await fetched_data.find({}).toArray();
    const catdata = await category_data.find({}).toArray();
    const daydata = await days_data.find({}).toArray();
    const userdata = await user_data.find({}).toArray();
    global.exercise = data;
    global.category = catdata;
    global.days =daydata;
    global.users = userdata;
    // console.log(exercise)
    // console.log(category)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
