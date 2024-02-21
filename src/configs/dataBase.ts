import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const dbConnectionString = process.env.DB_CONNECTION_STRING;
    if (dbConnectionString) {
      const client = await mongoose.connect(dbConnectionString);
      if (client) {
        console.log('Database connected successfully');
      } else {
        console.log('Database url is not provided');
      }
    }
  } catch (error) {
    console.log(error);
  }
};
