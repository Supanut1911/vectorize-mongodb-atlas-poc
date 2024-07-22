import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_ATLAS_URL as string
const client = new MongoClient(uri);


export const connectDB = async() => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (e) {
		console.error("connect to MonoDB error: ",e);
	} finally {
    await client.close();
  }
}



// run().catch(console.dir);
