import mongoose from 'mongoose';

// function to connect to the MongoDB 
const connectDB = async () => {
  try {
    // connect with the provided URI
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {

    console.error(`Error: ${error.message}`);

    // Exit if there is an error
    process.exit(1);
  }
};

export default connectDB;

