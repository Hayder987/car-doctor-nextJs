import { MongoClient, ServerApiVersion } from "mongodb";

export const dbCollection = {
    serviceType: "serviceType"
}

const dbConnect = (collectionName) => {
    const uri =
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.7ya1e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
  
    return client.db(process.env.DB_NAME).collection(collectionName);
  };
  
  export default dbConnect;
