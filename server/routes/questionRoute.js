const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

import db from "../db/connection.js";


// MongoDB connection string - replace <password>, <dbname>, and other placeholders as necessary
const mongoURI = process.env.ATLAS_URI || "";


app.get('/', (req, res) => {
    // This is the JSON object you want to send
    const responseObject = {
      message: "Welcome to our API",
      info: "This API provides data on various topics.",
      availableEndpoints: {
        questions: "/PawsYourMindset/questions"
      }
    };
  
    // Sending the JSON response
    res.json(responseObject);
  });
  


router.get('/PawsYourMindset/questions', async (req, res) => {
    const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected correctly to server");
        const collection = await db.collection("questions");

        // Find all documents in the collection
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        res.json(findResult);
    } catch (err) {
        console.log(err.stack);
        res.status(500).send('An error occurred');
    }

    // Close connection
    client.close();
});

module.exports = router;
