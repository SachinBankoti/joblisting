import mongoose from "mongoose";

export const dbConnection = async () => {
  const DB_URL = `mongodb://user:joblist@ac-j7daocd-shard-00-00.o9td73u.mongodb.net:27017,ac-j7daocd-shard-00-01.o9td73u.mongodb.net:27017,ac-j7daocd-shard-00-02.o9td73u.mongodb.net:27017/?ssl=true&replicaSet=atlas-13ifk2-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true });
    console.log('DB connected successfully');
  } catch (error) {
    console.log("Error while connecting the database", error.message);
  }
};
