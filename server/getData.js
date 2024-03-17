const { MongoClient } = require('mongodb');

async function getAllQuestions() {
    const uri = "mongodb+srv://nferreira:Ospreysontop@cluster0.v3bstss.mongodb.net/";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db("PawsYourMindset");
        const collection = database.collection("questions");

        const allQuestions = await collection.find({}).toArray();

        return allQuestions;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return null;
    } finally {
        await client.close();
        console.log('Disconnected from MongoDB'); 
    }
}

async function main() {
    const allQuestions = await getAllQuestions();
    //console.log(allQuestions[0].question);
    return allQuestions;
}

main();
