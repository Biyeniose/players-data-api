const { ObjectId } = require('mongodb');
//const Player = require('../models/playerModel')
const dotenv = require('dotenv');
const connectToDatabase = require('../../db/database')


dotenv.config({path: './/config/.env'});

const connectionString = process.env.ATLAS_URI;


const searchENG_PlayerByName = async (req, res) => {
    try {
      const db = await connectToDatabase();
        const nameQuery = req.query.name;
  
        if (!nameQuery) {
            return res.status(400).send({ message: "Please specify a name query parameter" });
        }
  
        // Create a regex to search for names that contain the query string, case insensitive
        const regex = new RegExp(nameQuery, "i");
  
        // Query both collections, you can add more collections if needed
        const collections = ["england1"];
        const promises = collections.map(collectionName => {
            const collection = db.collection(collectionName);
            return collection.find(
                { player_name: { $regex: regex } },
                { projection: { player_name: 1, _id: 0 } }  // Project only player_name, exclude _id
            ).limit(10).toArray();
        });
  
        // Execute all queries concurrently
        const results = await Promise.all(promises);
        const combinedResults = results.flat(); // Flatten the array of results
  
        // Limit the combined results to 10 entries
        const limitedResults = combinedResults.slice(0, 15);
  
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
  
  const searchESP_PlayerByName = async (req, res) => {
    try {
      const db = await connectToDatabase();
        const nameQuery = req.query.name;
  
        if (!nameQuery) {
            return res.status(400).send({ message: "Please specify a name query parameter" });
        }
  
        // Create a regex to search for names that contain the query string, case insensitive
        const regex = new RegExp(nameQuery, "i");
  
        // Query both collections, you can add more collections if needed
        const collections = ["spain"];
        const promises = collections.map(collectionName => {
            const collection = db.collection(collectionName);
            return collection.find(
                { player_name: { $regex: regex } },
                { projection: { player_name: 1, _id: 0 } }  // Project only player_name, exclude _id
            ).limit(10).toArray();
        });
  
        // Execute all queries concurrently
        const results = await Promise.all(promises);
        const combinedResults = results.flat(); // Flatten the array of results
  
        // Limit the combined results to 10 entries
        const limitedResults = combinedResults.slice(0, 15);
  
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
  
  const searchGER_PlayerByName = async (req, res) => {
    try {
      const db = await connectToDatabase();
        const nameQuery = req.query.name;
  
        if (!nameQuery) {
            return res.status(400).send({ message: "Please specify a name query parameter" });
        }
  
        // Create a regex to search for names that contain the query string, case insensitive
        const regex = new RegExp(nameQuery, "i");
  
        // Query both collections, you can add more collections if needed
        const collections = ["germany"];
        const promises = collections.map(collectionName => {
            const collection = db.collection(collectionName);
            return collection.find(
                { player_name: { $regex: regex } },
                { projection: { player_name: 1, _id: 0 } }  // Project only player_name, exclude _id
            ).limit(10).toArray();
        });
  
        // Execute all queries concurrently
        const results = await Promise.all(promises);
        const combinedResults = results.flat(); // Flatten the array of results
  
        // Limit the combined results to 10 entries
        const limitedResults = combinedResults.slice(0, 15);
  
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

  const searchITA_PlayerByName = async (req, res) => {
    try {
      const db = await connectToDatabase();
        const nameQuery = req.query.name;
  
        if (!nameQuery) {
            return res.status(400).send({ message: "Please specify a name query parameter" });
        }
  
        // Create a regex to search for names that contain the query string, case insensitive
        const regex = new RegExp(nameQuery, "i");
  
        // Query both collections, you can add more collections if needed
        const collections = ["italy"];
        const promises = collections.map(collectionName => {
            const collection = db.collection(collectionName);
            return collection.find(
                { player_name: { $regex: regex } },
                { projection: { player_name: 1, _id: 0 } }  // Project only player_name, exclude _id
            ).limit(10).toArray();
        });
  
        // Execute all queries concurrently
        const results = await Promise.all(promises);
        const combinedResults = results.flat(); // Flatten the array of results
  
        // Limit the combined results to 10 entries
        const limitedResults = combinedResults.slice(0, 15);
  
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
searchENG_PlayerByName,
searchESP_PlayerByName,
searchGER_PlayerByName,
searchITA_PlayerByName
}