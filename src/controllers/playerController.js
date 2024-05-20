const { MongoClient, ServerApiVersion } = require('mongodb');
const { ObjectId } = require('mongodb');
//const Player = require('../models/playerModel')
const dotenv = require('dotenv');
const connectToDatabase = require('../../db/database')


dotenv.config({path: './/config/.env'});

const connectionString = process.env.ATLAS_URI;

//mongoose.connect(connectionString)


const createPlayer = async (req, res) => {
    
}

const getPlayer = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("spain");
    let query = { _id: new ObjectId(req.params.id) };
    let player = await collection.findOne(query);
    console.log(req.params.id)
    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ message: "Player not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const getAllPlayers = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("spain");
    const results = await collection.find({}).toArray();
    //console.log(req.params.id)
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
  
}

const updatePlayer = async (req, res) => {

  }

const deletePlayer = async (req, res) => {
  
}

const getEnglishPlayers = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("england");
    let query = { _id: new ObjectId(req.params.id) };
    let player = await collection.findOne(query);
    console.log(req.params.id)
    if (player) {
      res.status(200).send(player);
    } else {
      res.status(404).send({ message: "Player not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const getPlayerByName = async (req, res) => {
  try {
    const db = await connectToDatabase();

    // Array of collection names
    const collections = ["england1", "france", "italy", "germany"];

    // Assuming the name is sent as a query parameter and replacing underscores with spaces
    const name = req.query.name.replace("_", " ");
    if (!name) {
        return res.status(400).send({ message: "No name provided" });
    }

    // Map each collection name to a Promise of querying that collection
    const queries = collections.map(collection => db.collection(collection).find({ player_name: name }).toArray());

    // Use Promise.all to wait for all the queries to complete
    const results = await Promise.all(queries);

    // Combine results from all collections
    const combinedResults = results.flat();

    if (combinedResults.length) {
        res.status(200).send(combinedResults);
    } else {
        res.status(404).send({ message: "No players found with that name" });
    }
  } catch (err) {
    console.error("Failed to retrieve players by name:", err);
    res.status(500).send(err);
  }
};



const getRandomPlayersFromEngland = async (req, res) => {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("england1");

    // Use MongoDB's $sample to get 5 random documents
    const randomPlayers = await collection.aggregate([
        { $sample: { size: 5 } }
    ]).toArray();

    if (randomPlayers.length) {
        res.status(200).send(randomPlayers);
    } else {
        res.status(404).send({ message: "No players found" });
    }
  } catch (err) {
      res.status(500).send(err);
  }
}

const searchPlayersByName = async (req, res) => {
  try {
      const db = await connectToDatabase();
      const nameQuery = req.query.name;

      if (!nameQuery) {
          return res.status(400).send({ message: "Please specify a name query parameter" });
      }

      // Create a regex to search for names that contain the query string, case insensitive
      const regex = new RegExp(nameQuery, "i");

      // Query both collections, you can add more collections if needed
      const collections = ["england1", "spain","germany", "italy", "france"];
      const promises = collections.map(collectionName => {
          const collection = db.collection(collectionName);
          return collection.find(
              { player_name: { $regex: regex } },
              { projection: { player_name: 1, _id: 0 } }  // Project only player_name, exclude _id
          ).limit(15).toArray();
      });

      // Execute all queries concurrently
      const results = await Promise.all(promises);
      const combinedResults = results.flat(); // Flatten the array of results

      // Limit the combined results to 10 entries
      const limitedResults = combinedResults.slice(0, 10);

      // Log player names to the console
      limitedResults.forEach(player => {
          console.log(player.player_name);
      });

      if (limitedResults.length) {
          res.status(200).send(limitedResults.map(player => player.player_name)); // Send only player names
      } else {
          res.status(404).send({ message: "No players found matching that name" });
      }
  } catch (err) {
      console.error("Error searching players by name:", err);
      res.status(500).send(err);
  }
}



module.exports = {
    createPlayer,
    getPlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer,
    getEnglishPlayers,
    getPlayerByName,
    getRandomPlayersFromEngland,
    searchPlayersByName
}

