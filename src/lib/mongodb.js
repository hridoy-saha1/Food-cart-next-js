import { MongoClient } from "mongodb";

let client;
let db;

export async function connectToDB() {
  if (db) return db;

  client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db("recipeDB");  // 🔥 এখানে DB নামটা নিশ্চিত করে দিন

  console.log("✅ MongoDB connected");
  return db;
}
