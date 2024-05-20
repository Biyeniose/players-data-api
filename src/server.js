const app = require('./app.js');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

dotenv.config({path: './/config/.env'});
const port = process.env.PORT;
const uri = process.env.ATLAS_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const startApiServer = async () => {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    
    // Get the database object
    let db = client.db("guess-game-data");
    
    // Start the API server
    app.listen(port, () => {
      console.log(`API started at http://localhost:${port}`)
    });

    return db; // Return the db object
  } catch (err) {
    console.error(err);
    process.exit(1); // Exit process with failure
  }
}

// Initialize the server and export the db object
let dbPromise = startApiServer();
module.exports = dbPromise;
