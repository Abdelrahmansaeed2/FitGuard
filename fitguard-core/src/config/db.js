const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/fitguard';
    const conn = await mongoose.connect(mongoURI);
    console.log(`[Database Connection]: Connected to MongoDB at host ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Connection Failure]: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
