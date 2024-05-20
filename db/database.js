const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config({ path: './/config/.env' });

const uri = process.env.ATLAS_URI;

let dbInstance;

const connectToDatabase = async () => {
  if (dbInstance) {
    return dbInstance;
  }
  
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  

  dbInstance = client.db("transfers-app");
  console.log("Connected to MongoDB for Request!");
  return dbInstance;
};

module.exports = connectToDatabase;
