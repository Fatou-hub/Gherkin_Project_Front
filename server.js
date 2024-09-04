const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

const uri = "mongodb://root:mypassword@localhost:27017/";
const client = new MongoClient(uri);

app.use(cors());

async function fetchSteps(limit) {
    try {
        console.log("Connecting to MongoDB...");
        await client.connect();
        console.log("Connected to MongoDB");
        const database = client.db('mydb');
        const collection = database.collection('steps');
        const cursor = collection.find({}).limit(limit);
        const results = await cursor.toArray();
        console.log("Fetched data from MongoDB:", results);
        return results;
    } catch (error) {
        console.error("Error fetching Steps data from MongoDB:", error);
        throw new Error('Error fetching Steps data');
    } finally {
        console.log("Closing MongoDB Steps connection");
        await client.close();
    }
}

app.get('/steps', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit, 20) || 20; // Ensure the limit is a number and defaults to 10
    if (isNaN(limit) || limit <= 0) {
      throw new Error('Invalid limit parameter');
    }
    const steps = await fetchSteps(limit);
    console.log("Sending response:", steps);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(steps));
  } catch (error) {
    console.error(error);é                
    res.status(500).send('Error fetching steps data');
  }
});

async function fetchFeatures(){
  try {
    await client.connect();
    const database = client.db('mydb');
    const collection = database.collection('features');
    
    // Récupère tous les documents et extrait les "name"
    const features = await collection.find({}, { projection: { name: 1, _id: 0 } }).toArray();
    console.log("voici le contenu de la collection feature :  => juste ici => :", features);

    return features.map(feature => feature.name); // Retourne seulement les "name"

  } catch (error) {
    console.error("Error fetching Features data from MongoDB:", error);
    throw new Error('Error fetching Features data');
  } finally {
    console.log("Closing MongoDB Features connection");
    await client.close();
  }
}
app.get('/features', async (req, res)=> {
  try {
    const features = await fetchFeatures();
    console.log("Sending response:", features);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(features));
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
