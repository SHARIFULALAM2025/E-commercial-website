const express = require('express')
const cors = require("cors")
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
app.use(express.json())
app.use(cors())
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.sxgnyhx.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        const database = client.db('business');
        const AboutCardData = database.collection('card');

        /* about page data save */
        app.post("/about/card", async(req, res) => {
            const cardData = req.body;
            const result = await AboutCardData.insertOne(cardData)
            res.send(result)
        })



        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('e-commers-website server is running. .......')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
