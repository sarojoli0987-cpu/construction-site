import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const globalForMongo = global as unknown as { _mongo?: Promise<MongoClient> };

if (!globalForMongo._mongo) {
  globalForMongo._mongo = new MongoClient(uri).connect();
}

const clientPromise = globalForMongo._mongo;
export default clientPromise;
